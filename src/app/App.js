import React from 'react'
import StickyHeader from 'components/common/stickyHeader'
import page from 'components/pages'
import ROUTES from 'utils/constants/routes'
import { firebase } from 'utils/firebase'
import { LoadIndicator } from 'components/common/styledComponents'
import {
  Redirect,
  Route,
  Switch
} from 'react-router'
import {
  TrendResetter,
  TrendSetter,
  LoadAligner,
  Page
} from './AppStyles'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {loading: true}
  }

  componentDidMount() {
    firebase.onAuthStateChanged(user => {
      this.props.setUser(user)
      this.setState({loading: false})
    })
  }

  render() {
    TrendResetter()
    if (!this.state.loading) {
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
              <Route exact path={ROUTES.SIGN_IN} component={page.SignIn} />
              <Route exact path={ROUTES.MANAGE} component={page.UserManagement} />
              <Route exact path={ROUTES.FORGOT_PASSWORD} component={page.ForgotPassword} />
              <Redirect from='*' to={ROUTES.INSTRUCTIONS} />
            </Switch>
          </Page>
        </TrendSetter>
      )
    } else {
      return (
        <TrendSetter>
          <LoadAligner>
            <LoadIndicator />
          </LoadAligner>
        </TrendSetter>
      )
    }
  }
}

export default App
