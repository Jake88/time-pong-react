import { connect } from 'react-redux'
import {
  actions as authActions
} from 'services/auth'

export const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(authActions.setUser(user))
})

export default connect(null, mapDispatchToProps)
