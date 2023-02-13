import styled from 'styled-components'
import { TPageSectionWrapperProps } from './model'

export const PageSectionWrapper = styled.div<TPageSectionWrapperProps>`
  flex: 1;
  min-width: ${(props) => (props.width ? props.width : 'auto')};
  display: flex;
  flex-direction: column;
  overflow: none;
  background: #ffffff;
`

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
