import React from 'react'
import SignInForm from './signInForm'
import { Title, SubHeader, Divider, ContentPanel } from 'components/common/styledComponents'
import Button from 'components/common/button'
import Loader from 'components/common/loader'
import ROUTES from 'utils/constants/routes'

import { FacebookSquare } from 'styled-icons/fa-brands/FacebookSquare'
import { Google } from 'styled-icons/fa-brands/Google'

import { colours } from 'utils/constants/globalStyles'

const SignIn = ({status, go}) => (
  <React.Fragment>
    <Title>Log In</Title>

    {!status.undefined && <Loader
      status={status}
      successMessage='Welcome back, Ponger!'
      successButton={{
        id: 'loaderSuccess',
        label: `Let's play!`,
        onClick: () => go(ROUTES.GAME)
      }}
    />}

    <ContentPanel>
      <SubHeader>Log in with:</SubHeader>
      <Button
        id='signInWithFacebook'
        variety='brand'
        icon={<FacebookSquare />}
        brand={colours.brands.facebook}
      >
        Log in with Facebook
      </Button>
      <Button
        id='signInWithGoogle'
        variety='brand'
        icon={<Google />}
        brand={colours.brands.google}
      >
        Log in with Google
      </Button>

      <Divider text='or' />
      <SubHeader>Log in with email:</SubHeader>

      <SignInForm />
    </ContentPanel>

  </React.Fragment>
)

export default SignIn
