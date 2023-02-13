export interface SecondaryLabelInputProps {
  header: string
  onChange: (value: string) => void
  onKeyDown?: (input: any) => void
  autoFocus?: boolean
  style?: any
  placeholder?: string
  input: string
  children?: ReactElement
  onFocus?: () => void
}
