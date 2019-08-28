import { connect } from 'react-redux'
import {
  types as authTypes,
  actions as authActions
} from 'services/auth'
import { selectors as apiSelectors } from 'services/apiManager'

import { push } from 'connected-react-router'

const mapStateToProps = (state) => ({
  status: apiSelectors.getRequestStatus(state, authTypes.SIGN_UP)
})

const mapDispatchToProps = dispatch => ({
  go: (path) => dispatch(push(path)),
  signOut: () => dispatch(authActions.signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)
