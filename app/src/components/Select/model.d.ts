export interface TSelectOption {
  id: string
  label: string
}

export interface SelectProps {
  options: TSelectOption[]
  width?: string
  selectFilterItem: (id: string) => void
  selectedId?: string
  defaultTitle: string
  headerWidth?: string
}

export interface TSelectWidthWrapperProps {
  width?: string
}
