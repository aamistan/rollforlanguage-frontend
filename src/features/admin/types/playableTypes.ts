export interface PlayableClass {
  id: string
  name: string
  description?: string
  lore?: string
  iconUrl?: string
  isPlayable: boolean

  tags: string[]
  statBonuses: Record<string, number>
  passiveAbilities: string[]

  createdAt: string
  updatedAt: string
}
