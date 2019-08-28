import React from 'react'
import { Field } from 'redux-form'
import TextField from 'components/common/inputs/textField'
import { Aligner, AlteredText } from 'components/common/styledComponents'
import Button, { ButtonGroup } from 'components/common/button'
import ROUTES from 'utils/constants/routes'
import {
  validateRequired,
  validateEmail
} from 'utils/validators/validators'

const SignInForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <Field
      label='Email'
      name='email'
      placeholder='Eg: timeponger_78@email.com'
      component={TextField}
      validate={[validateRequired, validateEmail]}
    />

    <Field
      label='Password'
      name='password'
      type='password'
      component={TextField}
      validate={[validateRequired]}
    />

    <Aligner aligned='right' >
      <ButtonGroup>
        <AlteredText small>Too drunk to remember?</AlteredText>
        <Button id='forgotPassword' small variety='link' onClick={() => props.go(ROUTES.FORGOT_PASSWORD)}>Reset password</Button>
      </ButtonGroup>
      <ButtonGroup>
        <AlteredText small>Not a member?</AlteredText>
        <Button id='signInLogIn' small variety='link' onClick={() => props.go(ROUTES.SIGN_UP)}>Sign up</Button>
        <Button id='signInSubmit' type='submit'>Log in</Button>
      </ButtonGroup>
    </Aligner>
  </form>
)

export default SignInForm
