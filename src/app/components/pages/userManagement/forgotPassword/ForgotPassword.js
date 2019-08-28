import React from 'react'
import ForgotPasswordForm from './forgotPasswordForm'
import { Title, ContentPanel } from 'components/common/styledComponents'
import Loader from 'components/common/loader'
import ROUTES from 'utils/constants/routes'

const ForgotPassword = ({status, go}) => (
  <React.Fragment>
    <Title>Reset Password</Title>

    {!status.undefined && <Loader
      status={status}
      successMessage='Success!'
      successButton={{
        id: 'loaderSuccess',
        label: `Sign in`,
        onClick: () => go(ROUTES.SIGN_IN)
      }}
    />}

    <ContentPanel>
      <ForgotPasswordForm />
    </ContentPanel>

  </React.Fragment>
)

export default ForgotPassword
