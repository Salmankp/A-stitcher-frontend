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

export const StyledAlertWrapper = styled.div`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: flex-end;
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
  margin-left: 10px;
`

export const StyledErrorAlert = styled.a`
  color: red;
`
