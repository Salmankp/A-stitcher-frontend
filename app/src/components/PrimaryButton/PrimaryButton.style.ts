import { Button } from 'antd'
import styled from 'styled-components'

export const StyledButton = styled(Button)`
  height: 100%;
  max-height: 45px;
  padding: 6px 16px;
  background: #de5300;
  border-radius: 2px;
  border-color: #de5300;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;

  &.ant-btn-primary {
    &:hover {
      background: #893402;
      border-color: #893402;
      color: #fffffff;
    }
    &:focus {
      color: #fff;
      background: #de5300;
      border-color: #de5300;
      outline: blue;
      outline-width: 2px;
      outline-style: solid;
      outline-offset: 2px;
    }
  }
`
