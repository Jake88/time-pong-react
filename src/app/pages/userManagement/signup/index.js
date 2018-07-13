import SignUp from './SignUp'
import {
  connecter,
  former
} from './SignUpContainer'

export default connecter(former(SignUp))