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

const ForgotPasswordForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <Field
      label='Email'
      name='email'
      placeholder='Eg: timeponger_78@email.com'
      component={TextField}
      validate={[validateRequired, validateEmail]}
    />

    <Aligner aligned='right' >
      <ButtonGroup>
        <AlteredText small>Not a member yet?</AlteredText>
        <Button id='signInLogIn' small variety='link' onClick={() => props.go(ROUTES.SIGN_UP)}>Sign up</Button>
        <Button id='signInSubmit' type='submit'>Reset</Button>
      </ButtonGroup>
    </Aligner>
  </form>
)

export default ForgotPasswordForm
