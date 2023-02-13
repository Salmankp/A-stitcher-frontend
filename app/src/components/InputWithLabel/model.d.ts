import { ReactElement } from 'react'

export interface InputWithLabelProps {
  title: string
  width?: string
  children: ReactElement
  customStyle?: React.CSSProperties
}

export interface InputWithLabelWrapperProps {
  width?: string
}
