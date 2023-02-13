import styled from 'styled-components'
import { TSelectWidthWrapperProps } from './model'

export const SelectContainer = styled.div<TSelectWidthWrapperProps>`
  width: ${(props) => (props.width ? props.width : '140px')};
  position: relative;
`

export const SelectListWrapper = styled.div<TSelectWidthWrapperProps>`
  position: absolute;
  width: ${(props) => (props.width ? props.width : '140px')};
  z-index: 999999;
`

export const SelectHeader = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  color: #212b36;
  cursor: pointer;
  height: 36px;
  padding: 6px 8px;
  border: 1px solid #b7bac6;
  border-radius: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: #e4e5eb;
  line-height: 22px;
`

export const SelectList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  border: 1px solid #e5e5e5;
  background: #ffffff;
  max-height: 700px;
  overflow: auto;
`

export const SelectItem = styled.li`
  list-style: none;
  padding: 4px 8px 4px 16px;
  cursor: pointer;
  background: #ffffff;
  &:hover {
    background: #ffdcc7;
  }

  display: flex;
`

export const Wrapper = styled.div`
  display: flex;
  margin-right: 10px;
`

export const SelectItemLabel = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #192129;
  cursor: pointer;
`
