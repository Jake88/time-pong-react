import React from 'react'
import { Field } from 'redux-form'
import {
  ContentPanel,
  Title
} from 'common/styledComponents'

const SignUp = () => {
  return (
    <React.Fragment>

      <Title>Sign Up</Title>

      <ContentPanel>
        <form>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="text" />

          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </form>
      </ContentPanel>

    </React.Fragment>
  )
}

export default SignUp