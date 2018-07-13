import 'jest-styled-components'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// Import our custom mocks
import '../mocks/reducers/appReducer'

// Use jest auto-mock for third party modules
jest.mock('connected-react-router')

// Set up Enzyme adapter. Required for shallow rendering.
Enzyme.configure({ adapter: new Adapter() })