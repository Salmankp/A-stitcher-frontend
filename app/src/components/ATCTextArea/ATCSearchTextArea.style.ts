import styled from 'styled-components'
import { Search } from '@styled-icons/boxicons-regular'

export const ATCSearchWrapper = styled.div`
  display: flex;
  flex: row;
  min-width: 100px;
  width: 100%;
  padding: 6px 8px;
  background: #fafbfc;
  border: 1px solid #b7bac6;
  border-radius: 4px;
  margin-right: 10px;
  height: 36px;
`

export const StyledIcon = styled(Search)`
  width: 20px;
  height: 20px;
  font-weight: 600;
  margin: auto;
`

export const StyledInput = styled.textarea`
  flex: 1;
  height: 100%;
  width: 100%;
  outline: none !important;
  border: none;
  &:focus-visible {
    outline: none !important;
  }
`
