import styled, { css } from 'styled-components'
import { TabProps } from './model'
export const TabsHeaderWrapper = styled.div`
  height: 46px;
  width: 100%;
  /* border-bottom: 1px solid #b7bac6; */
  box-shadow: 0px 4px 20px 2px rgb(0 0 0 / 8%);
  display: flex;
`

export const Tab = styled.div<TabProps>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  ${(props) =>
    props.selected &&
    css`
      color: #de5300;
      border-bottom: 2px solid #de5300; ;
    `}
`
