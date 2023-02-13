import styled from 'styled-components'
import { Search } from '@styled-icons/boxicons-regular'

export const ATCSearchWrapper = styled.div`
  margin-top: 20px;
`

export const StyledIcon = styled(Search)`
  width: 20px;
  height: 20px;
  font-weight: 600;
  margin: auto;
`

export const StyledPasswordInput = styled.input`
  flex: 1;
  height: 100%;
  width: 100%;

  padding: 0.6em 0.8em;
  border-radius: 9px;
  background-color: rgba(0, 0, 0, 0.04);
  width: 100%;
  border: 1px solid transparent;
  outline: none;
  font-size: 17px;
  transition: 0.2s ease-in-out &focus {
    outline: none;
    border: 1px solid red;
  }
  font-weight: 500;
  -webkit-text-security: disc;
`

export const StyledHr = styled.hr`
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  opacity: 0.5;
  &:before {
    content: '';
    // use the linear-gradient for the fading effect
    // use a solid background color for a solid bar
    background: linear-gradient(to right, transparent, #818078, transparent);
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
  }
  &:after {
    content: attr(data-content);
    position: relative;
    display: inline-block;
    color: black;
    padding: 0 0.5em;
    line-height: 1.5em;
    // this is really the only tricky part, you need to specify the background color of the container element...
    color: #818078;
    background-color: #fcfcfa;
  }
`
