import styled from 'styled-components'
import { StyledNavItemProps } from './model'
export const NavbarWrapper = styled.div`
  background: #de5300;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.12);
  height: 48px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 4px 5px;

  > * {
    margin-right: 2px;
  }
  *:last-child {
    margin-right: 0;
  }
`

export const NavItem = styled.div<StyledNavItemProps>`
  height: 100%;
  color: #ffffff;
  min-width: 90px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  cursor: pointer;
  border-radius: 6px;
  background: ${(props) => (props.selected ? '#893402;' : '')};
  &:hover {
    // background: #000000;
    background: #893402;
  }
  font-size: 14px;
`

export const NavItemLabel = styled.label`
  margin: auto;
  cursor: pointer;
  display: flex;
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: inherit;
`

export const NavIconWrapper = styled.div`
  border: 2px solid white;
  border-radius: 25px;
  width: 24px;
  margin: auto;
  height: 24px;
  display: flex;
`

export const NavIcon = styled.img`
  width: 19px;
  height: 14px;
  margin: auto;
`
