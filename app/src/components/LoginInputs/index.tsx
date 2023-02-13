import { LoginInputWrapper, StyledIcon, StyledInput } from './LoginInputs.style'
import { TATCsearchProps } from './model'

const LoginInputs = (props: TATCsearchProps) => {
  const { onChange, style, autoFocus, placeholder, search } = props
  return (
    <LoginInputWrapper style={style}>
      <StyledIcon />
      <StyledInput
        value={search}
        autoFocus={autoFocus}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </LoginInputWrapper>
  )
}

export default LoginInputs
