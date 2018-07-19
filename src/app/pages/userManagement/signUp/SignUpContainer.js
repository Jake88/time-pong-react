import { connect } from 'react-redux'
import { SIGN_UP } from 'reducers/authReducer/AuthReducer'
import { getRequestStatus } from 'reducers/apiReducer/ApiReducer'

const mapStateToProps = (state) => ({
  status: getRequestStatus(state, SIGN_UP)
})
const mapDispatchToProps = dispatch => ({})

export const connecter = connect(mapStateToProps, mapDispatchToProps)
