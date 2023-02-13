import {
  SecondaryLabelInputWrapper,
  HeaderWrapper,
  LabelHeader
} from './SecondaryLabelInput.style'
import { SecondaryLabelInputProps } from './model'
import { ATCInput } from '../../components'

const SecondaryLabelInput = (props: SecondaryLabelInputProps) => {
  const { header, onChange, onKeyDown, input, placeholder, style, onFocus } =
    props
  return (
    <SecondaryLabelInputWrapper>
      <HeaderWrapper style={style}>
        <LabelHeader>{header}</LabelHeader>
      </HeaderWrapper>

      <ATCInput
        onChange={onChange}
        onKeyDown={onKeyDown}
        input={input}
        onFocus={onFocus}
        style={{ ...style, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
        placeholder={placeholder}
      />
    </SecondaryLabelInputWrapper>
  )
}

export default SecondaryLabelInput
