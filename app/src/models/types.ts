export interface Option {
  label: string
  selected: boolean
}

export type EntitiesFilter = Record<string, Option>
