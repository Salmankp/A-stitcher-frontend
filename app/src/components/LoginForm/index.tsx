import React from 'react'
import { login } from '../../actions/login'
import {
  StyledInput,
  LoginInputWrapper
} from '../../components/LoginInputs/LoginInputs.style'
import { StyledPasswordInput } from '../../components/PasswordInput/PasswordInput.style'
import { StyledButton, StyledErrorAlert } from './LoginForm.style'
import { withFormik, FormikProps, FormikErrors, Form } from 'formik'

import { FormValues, OtherProps } from './model'

const LoginForm: React.FC = () => {
  const emailRef = React.useRef<Text | undefined | any>(undefined)
  const passwordRef = React.useRef<Text | undefined | any>(undefined)

  const isValidEmail = (email: any) => {
    if (/^\w+([\.\+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true
    }
    return false
  }

  // Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
  const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
    const { touched, errors } = props
    return (
      <Form>
        <LoginInputWrapper>
          <StyledInput
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Email"
          ></StyledInput>
        </LoginInputWrapper>
        {touched.email && errors.email && (
          <StyledErrorAlert>{errors.email}</StyledErrorAlert>
        )}
        <LoginInputWrapper>
          <StyledPasswordInput
            ref={passwordRef}
            name="password"
            placeholder="Password"
          ></StyledPasswordInput>
        </LoginInputWrapper>
        {touched.password && errors.password && (
          <StyledErrorAlert>{errors.password}</StyledErrorAlert>
        )}

        <LoginInputWrapper>
          <StyledButton type="submit">Login</StyledButton>
        </LoginInputWrapper>
      </Form>
    )
  }

  interface MyFormProps {
    initialEmail?: string
    message: string
  }

  const MyForm = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: (props) => {
      return {
        email: props.initialEmail || '',
        password: ''
      }
    },

    validate: (values: FormValues) => {
      const errors: FormikErrors<FormValues> = {}
      if (!emailRef.current.value) {
        errors.email = 'Required'
      } else if (!isValidEmail(emailRef.current.value)) {
        errors.email = 'Invalid email address'
      }
      if (!passwordRef.current.value) {
        errors.password = 'Required'
      }
      return errors
    },

    handleSubmit: (value) => {
      const values = {
        email: emailRef.current?.value,
        password: passwordRef.current?.value
      }
      login(values)
    }
  })(InnerForm)

  return (
    <>
      <MyForm message="Log in" />
    </>
  )
}

export default LoginForm
