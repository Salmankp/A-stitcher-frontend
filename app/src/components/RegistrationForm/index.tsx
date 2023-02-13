import React from 'react'
import {
  LoginInputWrapper,
  StyledInput
} from '../LoginInputs/LoginInputs.style'
import { StyledPasswordInput } from '../PasswordInput/PasswordInput.style'
import {
  StyledButton,
  StyledLabel,
  StyledErrorAlert,
  StyledText
} from './RegistrationForm.style'
import { register } from '../../actions/Register'
import { withFormik, FormikProps, FormikErrors, Form } from 'formik'

const RegistrationForm: React.FC = () => {
  const emailRef = React.useRef<Text | undefined | any>(undefined)
  const passwordRef = React.useRef<Text | undefined | any>(undefined)
  const firstnameRef = React.useRef<Text | undefined | any>(undefined)
  const lastnameRef = React.useRef<Text | undefined | any>(undefined)
  const confirmpasswordRef = React.useRef<Text | undefined | any>(undefined)

  interface FormValues {
    email: string
    password: string
  }

  interface OtherProps {
    message: string
  }

  interface MyFormProps {
    initialEmail?: string
    message: string
  }
  const isValidEmail = (email: string) => {
    if (/^\w+([\.\+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true
    }
    return false
  }

  const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
    const { touched, errors } = props
    return (
      <Form>
        <StyledText>Registration</StyledText>

        <LoginInputWrapper>
          <StyledLabel>First Name</StyledLabel>

          <StyledInput ref={firstnameRef} name="firstName"></StyledInput>
        </LoginInputWrapper>

        {touched.firstName && errors.password && (
          <StyledErrorAlert>{errors.firstName}</StyledErrorAlert>
        )}
        <LoginInputWrapper>
          <StyledLabel>Last Name</StyledLabel>

          <StyledInput ref={lastnameRef} name="lastName"></StyledInput>
        </LoginInputWrapper>
        {touched.lastName && errors.password && (
          <StyledErrorAlert>{errors.lastName}</StyledErrorAlert>
        )}

        <LoginInputWrapper>
          <StyledLabel>Email</StyledLabel>

          <StyledInput ref={emailRef} type="email" name="email"></StyledInput>
        </LoginInputWrapper>
        {touched.email && errors.email && (
          <StyledErrorAlert>{errors.email}</StyledErrorAlert>
        )}

        <LoginInputWrapper>
          <StyledLabel>Password</StyledLabel>
          <StyledPasswordInput
            ref={passwordRef}
            type="password"
            name="password"
          ></StyledPasswordInput>
        </LoginInputWrapper>
        {touched.password && errors.password && (
          <StyledErrorAlert>{errors.password}</StyledErrorAlert>
        )}

        <LoginInputWrapper>
          <StyledLabel>Confirm Password</StyledLabel>
          <StyledPasswordInput
            ref={confirmpasswordRef}
            type="password"
            name="confirmPassword"
          ></StyledPasswordInput>
        </LoginInputWrapper>
        {touched.confirmPassword && errors.confirmPassword && (
          <StyledErrorAlert>{errors.confirmPassword}</StyledErrorAlert>
        )}

        <LoginInputWrapper>
          <StyledButton type="submit">Register</StyledButton>
        </LoginInputWrapper>
      </Form>
    )
  }

  interface FormValues {
    email: string
    password: string
    confirmPassword: string
    firstName: string
    lastName: string
  }

  interface OtherProps {
    message: string
  }

  const MyForm = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: (props: any) => {
      return {
        email: props.initialEmail || '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: ''
      }
    },

    // Add a custom validation function (this can be async too!)
    validate: (values: FormValues) => {
      const errors: FormikErrors<FormValues> = {}
      if (!emailRef.current.value) {
        errors.email = 'Required'
      } else if (!isValidEmail(emailRef.current.value)) {
        errors.email = 'Invalid email address'
      }

      if (!firstnameRef.current.value) {
        errors.firstName = 'Required'
      }

      if (!lastnameRef.current.value) {
        errors.lastName = 'Required'
      }

      if (!passwordRef.current.value) {
        errors.password = 'Required'
      } else if (passwordRef.current.value.length < 6) {
        errors.password = 'Password must be at least 6 character long.'
      } else if (
        passwordRef.current.value !== confirmpasswordRef.current.value
      ) {
        errors.confirmPassword =
          'Password and confirm password must be the same.'
      }

      return errors
    },

    handleSubmit: (_, { setFieldError }) => {
      const values = {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
        firstName: firstnameRef.current?.value,
        lastName: lastnameRef.current?.value
      }

      register(values).catch(({ response }) => {
        // TODO: catch error in a more formalized way.
        if (
          response.status === 400 &&
          response.data?.data?.[0].includes('email already registered')
        ) {
          setFieldError('email', 'Email already registered')
        }
      })
    }
  })(InnerForm)

  return (
    <>
      <MyForm message="Sign up" />
    </>
  )
}

export default RegistrationForm
