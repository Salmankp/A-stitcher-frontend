import CheckBoxWithLabel from '../CheckboxWithLabel'
import { ATCInput } from '../../components'
import InputWithLabel from '../InputWithLabel'
import {
  CheckBoxLabelWithInputWrapper,
  InputWrapper
} from './CheckBoxLabelWithInput.style'

import { CheckBoxLabelWithInputProps } from './model'

const CheckBoxLabelWithInput = (props: CheckBoxLabelWithInputProps) => {
  const {
    Checkboxlabel,
    input,
    inputLabel,
    onChange,
    onKeyDown,

    placeholder
  } = props
  return (
    <CheckBoxLabelWithInputWrapper>
      <CheckBoxWithLabel label={Checkboxlabel} />
      <InputWrapper>
        <InputWithLabel title={inputLabel}>
          <ATCInput
            onChange={onChange}
            onKeyDown={onKeyDown}
            autoFocus={false}
            placeholder={placeholder}
            input={input}
          />
        </InputWithLabel>
      </InputWrapper>
    </CheckBoxLabelWithInputWrapper>
  )
}

export default CheckBoxLabelWithInput
