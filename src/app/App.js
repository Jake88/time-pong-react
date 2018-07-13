import React from 'react'
import StickyHeader from 'common/stickyHeader'
import page from 'pages'
import ROUTES from 'utils/constants/routes'
import {
  Redirect,
  Route,
  Switch
} from 'react-router'
import {
  TrendResetter,
  TrendSetter,
  Page
} from './AppStyles'

const App = props => {
  TrendResetter()
  return (
    <TrendSetter>
      <StickyHeader />
      <Page>
        <Switch>
          <Route exact path={ROUTES.INSTRUCTIONS} component={page.Instructions} />
          <Route exact path={ROUTES.GAME} component={page.Game} />
          <Route exact path={ROUTES.CARD_LIST} component={page.CardList} />
          <Route exact path={ROUTES.CARD_CREATOR} component={page.CardCreator} />
          <Route exact path={ROUTES.SIGN_UP} component={page.SignUp} />
          <Route exact path={ROUTES.SIGN_IN} component={() => <h1>Sign in</h1>} />
          <Route exact path={ROUTES.MANAGE} component={() => <h1>Manage</h1>} />
          <Route exact path={ROUTES.FORGOT_PASSWORD} component={() => <h1>Forgot PW</h1>} />
          <Redirect from='*' to={ROUTES.INSTRUCTIONS} />
        </Switch>
      </Page>
    </TrendSetter>
  )
}

export default App
