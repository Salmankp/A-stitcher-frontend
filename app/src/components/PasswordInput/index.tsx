import {
  ATCSearchWrapper,
  StyledIcon,
  StyledPasswordInput
} from './PasswordInput.style'
import { TATCsearchProps } from './model'

const ATCSearch = (props: TATCsearchProps) => {
  const { onChange, style, autoFocus, placeholder, search } = props
  return (
    <ATCSearchWrapper style={style}>
      <StyledIcon />
      <StyledPasswordInput
        value={search}
        autoFocus={autoFocus}
        placeholder={placeholder}
        onChange={(e: any) => onChange(e.target.value)}
      />
    </ATCSearchWrapper>
  )
}

export default ATCSearch
