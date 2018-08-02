import { connect } from 'react-redux'
import { push } from "connected-react-router"
import {
  selectors as appSelectors,
  actions as appActions
} from 'services/app'
import {
  selectors as authSelectors
} from 'services/auth'

export const mapStateToProps = state => ({
  isMenuActive: appSelectors.isMenuActive(state),
  user: authSelectors.getUser(state)
})

export const mapDispatchToProps = dispatch => ({
  toggleMenu: forceFlag => dispatch(appActions.toggleMenu(forceFlag)),
  go: path => {
    dispatch(appActions.toggleMenu(false))
    dispatch(push(path))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)
