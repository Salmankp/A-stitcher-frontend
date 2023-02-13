import React from 'react'
import {
  LoginWrapper,
  LoginBody,
  StyledAlertWrapper,
  StyledAlertText,
  StyledAlertLink
} from './Register.style'
import { LoginInputWrapper } from '../../components/LoginInputs/LoginInputs.style'
import RegistrationForm from '../../components/RegistrationForm'
import { useNavigate } from 'react-router-dom'

const Register: React.FC = () => {
  const navigate = useNavigate()
  const routeChange = () => {
    const path = '/login'
    navigate(path)
  }
  return (
    <LoginWrapper>
      <LoginBody>
        <RegistrationForm />
        <LoginInputWrapper>
          <StyledAlertWrapper>
            <StyledAlertText>Already registered?</StyledAlertText>
            <StyledAlertLink onClick={() => routeChange()}>
              Login
            </StyledAlertLink>
          </StyledAlertWrapper>
        </LoginInputWrapper>
      </LoginBody>
    </LoginWrapper>
  )
}

export default Register
