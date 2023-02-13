import { ReactElement } from 'react'

export interface ButtonProps {
  label?: string
  icon?: ReactElement
  height?: height
}

// Shape of form values
export interface FormValues {
  email: string
  password: string
}

export interface OtherProps {
  message: string
}
