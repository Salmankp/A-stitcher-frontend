import { EntitiesFilter } from '../../models/types'
// import { Option } from '../MultiSelect/model'

export interface TEntitiesToolbarProps {
  filteredOptions: EntitiesFilter
  selectEntityFilterItem: (id: string) => void
  search: string
  setSearch: (searchInput: string) => void
}
