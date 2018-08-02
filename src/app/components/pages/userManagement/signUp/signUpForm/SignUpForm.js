import React from 'react'
import { Field } from 'redux-form'
import TextField from 'components/common/inputs/textField'
import { Aligner, AlteredText } from 'components/common/styledComponents'
import Button, { ButtonGroup } from 'components/common/button'
import ROUTES from 'utils/constants/routes'
import {
  validateRequired,
  validateEmail,
  validateMediumPassword,
  validateStrongPassword,
  validateConfirmPassword
} from 'utils/validators/validators'

/*****
 * TODO:
 * Handle success redirect
 *
 * Handle inline validation
 *  Max char length for u/n
 *  Has email / username been used before?
 */

const SignUpForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <Field
      label='Username'
      name='username'
      placeholder='Eg: TimePonger78'
      component={TextField}
    />

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
      validate={[validateRequired, validateMediumPassword]}
      warn={[validateStrongPassword]}
    />

    <Field
      label='Confirm Password'
      name='confirmPassword'
      type='password'
      component={TextField}
      validate={[validateRequired, validateConfirmPassword]}
    />

    <Aligner aligned='right' >
      <ButtonGroup>
        <AlteredText small>Already a member?</AlteredText>
        <Button id='signUpLogIn' small variety='link' onClick={() => props.go(ROUTES.SIGN_IN)}>Log In</Button>
        <Button id='signInSubmit' type='submit'>Submit</Button>
      </ButtonGroup>
    </Aligner>
  </form>
)

export default SignUpForm
