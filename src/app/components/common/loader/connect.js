import { connect } from 'react-redux'
import { actions } from 'services/apiManager'

export const mapDispatchToProps = dispatch => ({
  retry: action => dispatch(action),
  apiReset: key => dispatch(actions.apiReset(key))
})

export default connect(null, mapDispatchToProps)
