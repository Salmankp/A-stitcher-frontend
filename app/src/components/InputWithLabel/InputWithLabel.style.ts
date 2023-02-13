import styled from 'styled-components'
import { InputWithLabelWrapperProps } from './model'

export const InputWithLabelWrapper = styled.div<InputWithLabelWrapperProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : '100%')};
`

export const HeaderLabel = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.15px;
  color: #212b36;
  margin-bottom: 4px;
  white-space: nowrap;
`
