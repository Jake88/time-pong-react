import { reduxForm } from 'redux-form'
import FormNames from 'utils/constants/formNames'

export default reduxForm({
  form: FormNames.RESET_PASSWORD
})
