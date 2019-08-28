import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import {
  actions as authActions
} from 'services/auth'

const mapStateToProps = () => ({})
const mapDispatchToProps = dispatch => ({
  onSubmit: () => dispatch(authActions.resetPassword()),
  go: (path) => dispatch(push(path))
})

export default connect(mapStateToProps, mapDispatchToProps)
