import styled, { css } from 'styled-components'
import { ATCSuggestItemProps } from './model'

export const ATCSearchSWrapper = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`

export const ATCSuggest = styled.div`
  min-width: 60px;
  top: 100%;
  background: #ffffff;
  border: 1px solid #e4e8eb;
  box-shadow: 0 6px 12px 2px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  position: absolute;
  z-index: 999;
  width: 98%;
  display: flex;
  flex-direction: column;
`

export const ATCSuggestItem = styled.div<ATCSuggestItemProps>`
  width: 100%;
  height: 24px;
  padding: 4px 8px 4px 16px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #192129;
  line-height: 17px;
  ${(props) =>
    ((props?.selected) === true) &&
    css`
      background: #ffdcc7;
      font-weight: 500;
    `}
`

export const SpinWrapper = styled.div`
  display: flex;

  > * {
    margin: auto;
  }

  padding-top: 5px;
  padding-bottom: 5px;
`
