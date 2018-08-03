import App from './App'
import connect from './connect'
import { withRouter } from 'react-router' // Needed to ensure router re renders correctly

export default withRouter(connect(App))
