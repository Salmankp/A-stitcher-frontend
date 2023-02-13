import React from 'react'
import { ATCSearchWrapper, StyledInput } from './ATCSearchInput.style'
import { TATCsearchProps } from './model'

const ATCInput = (props: TATCsearchProps): JSX.Element => {
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
        onFocus={onFocus}
        autoFocus={autoFocus}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown != null ? (e) => onKeyDown(e) : () => {}}
      />
    </ATCSearchWrapper>
  )
}

export default ATCInput
