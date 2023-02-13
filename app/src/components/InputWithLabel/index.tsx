import { InputWithLabelProps } from './model'
import { InputWithLabelWrapper, HeaderLabel } from './InputWithLabel.style'

const InputWithLabel = (props: InputWithLabelProps) => {
  const { title, width, children, customStyle } = props

  return (
    <InputWithLabelWrapper width={width}>
      <HeaderLabel style={customStyle}>{title}</HeaderLabel>
      {children}
    </InputWithLabelWrapper>
  )
}

export default InputWithLabel
