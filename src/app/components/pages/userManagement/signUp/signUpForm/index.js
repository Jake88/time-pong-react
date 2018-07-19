import SignUpForm from './SignUpForm'
import {
  connecter,
  former
} from './SignUpFormContainer'

export default connecter(former(SignUpForm))
