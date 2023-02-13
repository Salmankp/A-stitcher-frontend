import React from 'react'
import { ATCStyledCheckbox } from './ATCCheckBox.style'
import { CheckBoxProps } from './model'

const ATCCheckbox = (props: CheckBoxProps): JSX.Element => {
  const { selected, disabled, onClick } = props
  return (
    <ATCStyledCheckbox
      checked={selected}
      disabled={disabled}
      onClick={onClick}
    />
  )
}

export default ATCCheckbox
