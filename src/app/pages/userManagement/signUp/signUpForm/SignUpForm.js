import React from 'react'
import { Field } from 'redux-form'
import TextField from 'common/inputs/textField'
import { Aligner, AlteredText } from 'common/styledComponents'
import Button from 'common/inputs/button'
import ROUTES from 'utils/constants/routes'
import {
  validateRequired,
  validateEmail,
  validatePassword,
  validateConfirmPassword
} from 'utils/validators/validators'

/*****
 * TODO:
 * On submit, dispatch an action to submit the sign up form
 * Set up a saga that makes the call to firebase doAuthEtc
 * Set up a reducer to handle all API calls loading / error state (see https://medium.com/stashaway-engineering/react-redux-tips-better-way-to-handle-loading-flags-in-your-reducers-afda42a804c6 )
 * Handle loading spinner
 * Handle possible returned error (Do we handle this in the form component, or in the Sign Up page?)
 * Handle success redirect
 *
 * Handle inline validation
 *  Max char length for u/n, email, password?
 *  Do passwords match?
 *  Is email a valid email?
 *  Has email / username been used before?
 *
 * Style the button. (Use the button style on the instruction page?)
 * Style the inputs
 */

const SignUpForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <Field
      label='Username'
      name='username'
      placeholder='Eg: TimePonger78'
      component={TextField}
    /> <br/>

    <Field
      label='Email'
      name='email'
      placeholder='Eg: timeponger_78@email.com'
      component={TextField}
      validate={[validateRequired, validateEmail]}
    /> <br/>

    <Field
      label='Password'
      name='password'
      type='password'
      component={TextField}
      validate={[validateRequired, validatePassword]}
    /> <br/>

    <Field
      label='Confirm Password'
      name='confirmPassword'
      type='password'
      component={TextField}
      validate={[validateRequired, validateConfirmPassword]}
    /> <br/>

    <Aligner aligned='right' >
      <AlteredText small>Already a member?</AlteredText>
      <Button small variety='link' onClick={() => props.go(ROUTES.SIGN_IN)}>Log In</Button>
      <Button type='submit'>Submit</Button>
    </Aligner>
  </form>
)

export default SignUpForm