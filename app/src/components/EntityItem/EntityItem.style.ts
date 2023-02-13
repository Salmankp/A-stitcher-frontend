import styled, { css } from 'styled-components'
import { EntityItemWrapperProps } from './model'
export const EntityItemWrapper = styled.div<EntityItemWrapperProps>`
  display: flex;
  flex-direction: row;
  height: 48px;
  background: #ffffff;
  border: 1px solid #e4e5eb;
  box-shadow: 0px 4px 18px 3px rgba(46, 50, 52, 0.08);
  border-radius: 6px;
  margin-bottom: 8px;
  padding: 8px 16px;
  ${(props) =>
    props.selected &&
    css`
      background: #d6e1fd;
      border: 2px solid #0c3bb9;
    `}

  &:hover {
    cursor: pointer;
  }
`

export const LetterIcon = styled.div<EntityItemWrapperProps>`
  width: 32px;
  height: 32px;
  background: linear-gradient(180deg, #ebebeb 0%, #cecece 100%);
  border-radius: 33px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  letter-spacing: 0.35px;
  color: #56626e;
  label {
    margin: auto;
  }
  margin-right: 8px;
  &:hover {
    cursor: pointer;
  }
  ${(props) =>
    props.selected &&
    css`
      background: linear-gradient(180deg, #557eea 0%, #0c3bb9 116.67%);
      color: #ffffff;
    `}
`

export const ItemLabel = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #192129;
  margin: auto 0 auto 0;
  &:hover {
    cursor: pointer;
  }
`
export const ItemEndLabel = styled.label`
  margin: auto 0 auto auto;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.15px;
  color: #0c3bb9;
  &:hover {
    cursor: pointer;
  }
`
