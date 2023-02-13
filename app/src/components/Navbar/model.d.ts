export interface navBarElement {
  id: string
  label: string
  path?: string
  style?: any
  onClick?: any
}

export interface navBarProps {
  items: navBarElement[]
}

export interface StyledNavItemProps {
  selected?: boolean
}
