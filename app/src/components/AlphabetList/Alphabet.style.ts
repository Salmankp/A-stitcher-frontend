import styled, { css } from 'styled-components'
import { AlphCharProps } from './model'

export const AlphaListWrapper = styled.div`
  max-width: 38px;
  background: #f4f4f7;
  border-radius: 4px;
  padding: 8px 4px;
  flex: 1;
  height: fit-content;
  margin: 16px 16px 16px 0;
  flex-direction: column;
  display: flex;
`

export const AlphaChar = styled.label<AlphCharProps>`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin: auto;
  line-height: 1px;
  ${(props) =>
    props.selected &&
    css`
      color: #0c3bb9;
      font-weight: 700;
      font-size: 20px;
    `}
`

export const AlphaCharWrapper = styled.div<AlphCharProps>`
  width: 30px;
  height: 24px;
  display: flex;
  border-radius: 4px;
  ${(props) =>
    props.selected &&
    css`
      background: #d6e1fd;
    `}
`
