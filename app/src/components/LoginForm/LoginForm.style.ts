import styled from 'styled-components'

export const LoginWrapper = styled.div`
  height: inherit;
  display: flex;
  background-color: #e5e5e5;
`

export const LoginBody = styled.div`
  width: 500px;
  padding: 10px;
  margin: auto;
`

export const StyledText = styled.p`
  display: flex;
  justify-content: center;
  color: #e75b00;
  font-size: 1.5rem;
  font-weight: bolder;
`

export const StyledButton = styled.button`
  cursor: pointer;
  height: 100%;
  max-height: 45px;
  padding: 6px 16px;
  background: #de5300;
  border-radius: 2px;
  border-color: #de5300;
  &:hover {
    background: #de5300;
    border-color: #de5300;
    opacity: 0.8;
  }
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  width: 100%;
  border-radius: 20px;
  color: #ffff;
  border: 1px solid #de5300; ;
`

export const StyledAlertWrapper = styled.div`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
  margin-top: 20px;
`

export const StyledAlertText = styled.p`
  color: gray;
`

export const StyledAlertLink = styled.a`
  color: #de5300;
  &:hover {
    color: #de5300;
    text-decoration: underline;
  }
`

export const StyledErrorAlert = styled.a`
  color: red;
`
