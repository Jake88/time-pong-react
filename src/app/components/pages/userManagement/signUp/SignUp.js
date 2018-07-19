import React from 'react'
import SignUpForm from './signUpForm/index'
import ContentPanel from 'components/common/contentPanel'
import { Title, SubHeader, Divider } from 'components/common/styledComponents'
import Button from 'components/common/inputs/button'
import { FacebookSquare } from 'styled-icons/fa-brands/FacebookSquare'
import { Google } from 'styled-icons/fa-brands/Google'

import { colours } from 'utils/constants/globalStyles'

const SignUp = ({status}) => (
  <React.Fragment>
    <Title>Sign Up</Title>

    <ContentPanel status={status}>
      <SubHeader>Sign up with:</SubHeader>
      <Button variety='brand' icon={<FacebookSquare />} brand={colours.brands.facebook}>Sign up with Facebook</Button>
      <Button variety='brand' icon={<Google />} brand={colours.brands.google}>Sign up with Google</Button>

      <Divider text='or' />
      <SubHeader>Sign up with email:</SubHeader>
      <SignUpForm />
    </ContentPanel>

  </React.Fragment>
)

export default SignUp