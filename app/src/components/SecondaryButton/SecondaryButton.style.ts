import { Button } from 'antd'
import styled, { css } from 'styled-components'
import { ButtonProps } from './model'

export const StyledButton = styled(Button)<ButtonProps>`
  height: 100%;
  max-height: 45px;
  padding: 6px 16px;
  border-radius: 2px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  border: 1px solid #0c3bb9;
  border-radius: 2px;
  width: ${(props) => (props.width ? props.width : 'auto')};
  color: #0c3bb9;
  ${(props) =>
    props.label
      ? css`
          svg {
            margin-right: 10px;
          }
        `
      : css`
          svg {
            margin: 0;
          }
        `}

  ${(props) => props.customstyle}

  &:hover {
    background: #d6e1fd;
    color: #1b326f;
    border: 1px solid #1b326f;
  }

  &:focus {
    color: #0c3bb9;
    background: #fffffff;
    border-color: #0c3bb9;
    outline: #0c3bb9;
    outline-width: 2px;
    outline-style: solid;
    outline-offset: 2px;
  }
`
