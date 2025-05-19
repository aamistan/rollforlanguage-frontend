// /src/features/admin/stores/tagGlossaryStore.ts

import type { AxiosError } from 'axios'
import { defineStore } from 'pinia'
import {
  getCharacterTags,
  createCharacterTag,
  updateCharacterTag,
  toggleCharacterTagActive,
  type CharacterTag,
} from '@/features/admin/services/playableTagService'

export const useTagGlossaryStore = defineStore('tagGlossary', {
  state: () => ({
    tags: [] as CharacterTag[],
    lastTagRefresh: Date.now(),

    isManageTagsModalOpen: false,

    tagError: null as string | null,
  }),

  getters: {
    activeTags: state => state.tags.filter(tag => tag.isActive),
    inactiveTags: state => state.tags.filter(tag => !tag.isActive),
  },

  actions: {
    async fetchTags(): Promise<void> {
      this.tagError = null
      try {
        this.tags = await getCharacterTags(true)
      } catch (error: unknown) {
        const axiosError = error as AxiosError<{ error: string }>
        this.tagError =
          axiosError.response?.data?.error || 'Failed to load playable tags.'
      }
    },

    async createTag(name: string, description?: string): Promise<void> {
      this.tagError = null
      try {
        const newTag = await createCharacterTag({ name, description })
        this.tags.push(newTag)
        this.refreshTagList()
      } catch (error: unknown) {
        const axiosError = error as AxiosError<{ error: string }>
        this.tagError =
          axiosError.response?.data?.error || 'Failed to create tag.'
        throw error
      }
    },

    async updateTag(id: string, name: string, description?: string): Promise<void> {
      this.tagError = null
      try {
        const updated = await updateCharacterTag(id, { name, description })
        const index = this.tags.findIndex(t => t.id === id)
        if (index !== -1) this.tags[index] = updated
        this.refreshTagList()
      } catch (error: unknown) {
        const axiosError = error as AxiosError<{ error: string }>
        this.tagError =
          axiosError.response?.data?.error || 'Failed to update tag.'
        throw error
      }
    },

    async toggleActive(id: string, isActive: boolean): Promise<void> {
      this.tagError = null
      try {
        const updated = await toggleCharacterTagActive(id, isActive)
        const index = this.tags.findIndex(t => t.id === id)
        if (index !== -1) this.tags[index] = updated
        this.refreshTagList()
      } catch (error: unknown) {
        const axiosError = error as AxiosError<{ error: string }>
        this.tagError =
          axiosError.response?.data?.error ||
          `Failed to ${isActive ? 'restore' : 'delete'} tag.`
        throw error
      }
    },

    refreshTagList() {
      this.lastTagRefresh = Date.now()
    },

    openManageTagsModal() {
      this.isManageTagsModalOpen = true
    },
  },
})
