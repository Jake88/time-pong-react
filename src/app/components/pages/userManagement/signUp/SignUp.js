import React from 'react'
import SignUpForm from './signUpForm/index'
import { Title, SubHeader, Divider, ContentPanel } from 'components/common/styledComponents'
import Button from 'components/common/button'
import Loader from 'components/common/loader'
import ROUTES from 'utils/constants/routes'

import { FacebookSquare } from 'styled-icons/fa-brands/FacebookSquare'
import { Google } from 'styled-icons/fa-brands/Google'

import { colours } from 'utils/constants/globalStyles'

const SignUp = ({status, go}) => (
  <React.Fragment>
    <Title>Sign Up</Title>

    {!status.undefined && <Loader
      status={status}
      successMessage='Welcome to the Pongers!'
      successButton={{
        id: 'loaderSuccess',
        label: `Let's play!`,
        onClick: () => go(ROUTES.GAME)
      }}
    />}

    <ContentPanel>
      <SubHeader>Sign up with:</SubHeader>
      <Button
        id='signUpWithFacebook'
        variety='brand'
        icon={<FacebookSquare />}
        brand={colours.brands.facebook}
      >
        Sign up with Facebook
      </Button>
      <Button
        id='signUpWithGoogle'
        variety='brand'
        icon={<Google />}
        brand={colours.brands.google}
      >
        Sign up with Google
      </Button>

      <Divider text='or' />
      <SubHeader>Sign up with email:</SubHeader>

      <SignUpForm />
    </ContentPanel>

  </React.Fragment>
)

export default SignUp
