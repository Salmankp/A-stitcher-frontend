import { ATCSearchWrapper, StyledInput } from './ATCSearchTextArea.style'
import { TATCsearchProps } from './model'

const ATCTextArea = (props: TATCsearchProps) => {
  const {
    children,
    onChange,
    style,
    autoFocus,
    placeholder,
    input,
    onKeyDown,
    onFocus
  } = props

  return (
    <ATCSearchWrapper style={style}>
      {children}
      <StyledInput
        value={input}
        autoFocus={autoFocus}
        onFocus={onFocus}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown != null ? (e) => onKeyDown(e) : () => {}}
      />
    </ATCSearchWrapper>
  )
}

export default ATCTextArea
