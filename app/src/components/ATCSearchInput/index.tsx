import React from 'react'
import ATCInput from '../ATCInput'
import { StyledSearchIcon } from './ATCSearchInput.style'
import { TATCsearchProps } from './model'

const ATCSearch = (props: TATCsearchProps): JSX.Element => {
  const { onChange, style, autoFocus, placeholder, search, onKeyDown } = props
  return (
    <ATCInput
      onChange={onChange}
      style={style}
      autoFocus={autoFocus}
      placeholder={placeholder}
      input={search}
      onKeyDown={onKeyDown}
    >
      <StyledSearchIcon />
    </ATCInput>
  )
}

export default ATCSearch
