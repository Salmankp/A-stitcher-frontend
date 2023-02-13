// import { Option } from './model'

export interface TMultiSelectOption {
  id: string
  label: string
  selected: boolean
}

export interface MultiSelectProps {
  options: TMultiSelectOption[]
  width?: string
  selectFilterItem: (id: string) => void
  wrapWidth?: string
  placeholder?: string
}

export interface TSelectWidthWrapperProps {
  width?: string
}
