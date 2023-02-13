import styled, { css } from 'styled-components'
import { CollapseBoxStyleProps } from './model'

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e4e5eb;
  margin-bottom: 16px;
`

export const BoxHeader = styled.div<CollapseBoxStyleProps>`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  cursor: pointer;

  ${(props) =>
    props.fixOpen &&
    css`
      cursor: default;
    `}
`

export const BoxHeaderIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #d6e1fd;
  display: flex;
  svg {
    margin: auto;
    width: 16px;
    color: #0c3bb9;
    font-weight: bolder;
  }
  margin-right: 8px;
  cursor: pointer;
`

export const BoxHeaderLabel = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  display: flex;
  color: #192129;

  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
`

export const ArrowLabel = styled.label`
  margin: auto 5px auto auto;
  font-size: 14px;
  cursor: pointer;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  width: 100%;
  margin-bottom: 16px;
  align-items: center;
  > * {
    margin-right: 16px;
  }

  *:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }
`

export const ContainerBox = styled.div`
  display: flex;
  border: 1px solid #0c3bb9;
  border-radius: 4px;
  padding: 8px;
  flex-direction: column;
  width: 100%;
`

export const ContainerInnerSegment = styled.div`
  display: flex;
  flex-direction: column;
`

export const LabelInputWrapper = styled.div`
  display: flex;

  > * {
    margin-right: 16px;
  }

  *:last-child {
    margin-right: 0;
  }
`
