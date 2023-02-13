import { ChecboxWithLabelWrapper, StyledLabel } from './Checkbox.style'
import { CheckBoxWithLabelProps } from './model'
import { ATCCheckbox } from '../../components'

const CheckBoxWithLabel = (props: CheckBoxWithLabelProps) => {
  const { label, onClick, selected, labelStyle } = props
  return (
    <ChecboxWithLabelWrapper>
      <ATCCheckbox selected={selected} onClick={onClick} />
      {label && <StyledLabel style={labelStyle}>{label}</StyledLabel>}
    </ChecboxWithLabelWrapper>
  )
}

export default CheckBoxWithLabel
