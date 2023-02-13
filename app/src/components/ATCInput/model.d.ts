export interface TATCsearchProps {
  onChange: (value: string) => void
  onKeyDown?: (input: any) => void
  onFocus?: () => void
  autoFocus?: boolean
  style?: React.CSSProperties
  placeholder?: string
  input: string
  children?: ReactElement
}
