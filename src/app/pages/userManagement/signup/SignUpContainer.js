import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

const mapStateToProps = () => ({})
const mapDispatchToProps = dispatch => ({})

export const connecter = connect(mapStateToProps, mapDispatchToProps)
export const former = reduxForm({ form: 'signUp' })
