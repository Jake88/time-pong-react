import { connect } from 'react-redux'
import {
  actions as authActions
} from 'services/auth'

export const mapStateToProps = state => ({})

export const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(authActions.setUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)
