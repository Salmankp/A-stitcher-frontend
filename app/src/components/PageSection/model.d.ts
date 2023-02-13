import { ReactElement } from 'react'

export interface TPageSectionWrapperProps {
  width?: string
}

export interface TPageSectionProps {
  children?: ReactElement | never[]
  width?: string
  footerItem?: ReactElement
}
