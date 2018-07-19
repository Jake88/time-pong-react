import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import FormNames from 'utils/constants/formNames'

import {
  actions as authActions
} from 'services/auth'
import { push } from 'connected-react-router'

const mapStateToProps = () => ({})
const mapDispatchToProps = dispatch => ({
  onSubmit: () => dispatch(authActions.signUp()),
  go: (path) => dispatch(push(path))
})

export const connecter = connect(mapStateToProps, mapDispatchToProps)
export const former = reduxForm({
  form: FormNames.SIGN_UP
})
