import React from 'react'
import {
  LoginWrapper,
  LoginBody,
  StyledText,
  StyledAlertWrapper,
  StyledAlertText,
  StyledAlertLink
} from './Login.style'
import { LoginInputWrapper } from '../../components/LoginInputs/LoginInputs.style'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../../components/LoginForm'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const routeChange = () => {
    const path = '/register'
    navigate(path)
  }

  return (
    <LoginWrapper>
      <LoginBody>
        <StyledText>Login</StyledText>
        <LoginForm />
        <LoginInputWrapper>
          <StyledAlertWrapper>
            <StyledAlertText>Not a member yet?</StyledAlertText>
            <StyledAlertLink onClick={() => routeChange()}>
              Register
            </StyledAlertLink>
          </StyledAlertWrapper>
        </LoginInputWrapper>
      </LoginBody>
    </LoginWrapper>
  )
}

export default Login
