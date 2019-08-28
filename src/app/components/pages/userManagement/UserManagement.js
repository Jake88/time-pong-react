import React from 'react'
import { Title, ContentPanel } from 'components/common/styledComponents'
import Button from 'components/common/button'
import ROUTES from 'utils/constants/routes'

const UserManagement = ({status, signOut, go}) => (
  <React.Fragment>
    <Title>Account Management</Title>

    <ContentPanel>
      <Button
        id='signIn'
        onClick={() => go(ROUTES.SIGN_IN)}
      >
        Sign in
      </Button>
      <Button
        id='signUp'
        onClick={() => go(ROUTES.SIGN_UP)}
      >
        Sign up
      </Button>

      <Button
        id='signOut'
        onClick={() => {
          console.log('TODO: open a confirm modal')
          signOut()
        }}
      >
        Sign out
      </Button>
    </ContentPanel>
  </React.Fragment>
)

export default UserManagement
