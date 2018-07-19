import { connect } from 'react-redux'
import { types as authTypes } from 'services/auth'
import { selectors as apiSelectors } from 'services/apiManager'

const mapStateToProps = (state) => ({
  status: apiSelectors.getRequestStatus(state, authTypes.SIGN_UP)
})
const mapDispatchToProps = dispatch => ({})

export const connecter = connect(mapStateToProps, mapDispatchToProps)
