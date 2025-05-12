import type { AdminDashboardTool } from './adminDashboardTools'

export const adminCharacterDashboardTools: AdminDashboardTool[] = [
  {
    name: 'Create',
    icon: 'lucide:plus-square',
    library: 'iconify',
    children: [
      {
        name: 'Playable Class',
        icon: 'mdi:shield-sword',
        library: 'iconify',
        action: 'createClass',
      },
      {
        name: 'Playable Species',
        icon: 'mdi:dna',
        library: 'iconify',
        action: 'createSpecies',
      },
    ],
  },
  {
    name: 'Browse',
    icon: 'lucide:list',
    library: 'iconify',
    children: [
      {
        name: 'Class Table',
        icon: 'mdi:table-large',
        library: 'iconify',
        action: 'browseClasses',
      },
      {
        name: 'Species Table',
        icon: 'mdi:table-large-plus',
        library: 'iconify',
        action: 'browseSpecies',
      },
    ],
  },
  {
    name: 'Manage Tags',
    icon: 'lucide:tag',
    children: [
      {
        name: 'Class Tags',
        icon: 'mdi:tag-text',
        library: 'iconify',
        action: 'manageClassTags',
      },
      {
        name: 'Species Tags',
        icon: 'mdi:tag-multiple',
        library: 'iconify',
        action: 'manageSpeciesTags',
      },
    ],
  },
  {
    name: 'Manage Stats',
    icon: 'mdi:chart-timeline-variant',
    library: 'iconify',
    action: 'manageStats',
  },
  {
    name: 'Manage Passives',
    icon: 'lucide:brain',
    library: 'iconify',
    action: 'managePassives',
  },
  {
    name: 'Refresh Classes',
    icon: 'lucide:refresh-ccw',
    action: 'refreshClasses',
  },
  {
    name: 'Export Data',
    icon: 'lucide:download',
    action: 'exportClasses',
  },
]
