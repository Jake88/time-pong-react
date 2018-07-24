import {
  mapDispatchToProps,
  mapStateToProps
} from './connect'
import {
  isMenuActive,
  toggleMenu
} from '../../../reducers/appReducer/AppReducer'
import { push } from 'connected-react-router'

describe('MenuContainer', () => {
  describe('mapStateToProps', () => {
    const mockState = {
      router: {
        location: {
          pathname: 'location/pathname'
        }
      }
    }

    test('should map expected state to props', () => {
      expect(mapStateToProps(mockState)).toEqual({
        active: 'isMenuActive',
        current: 'location/pathname'
      })

    })
  })

  describe('mapDispatchToProps', () => {
    test('go should dispatch toggleMenu(false) and push(path_param)', () => {
      const dispatch = jest.fn()
      const returnedProps = mapDispatchToProps(dispatch)

      returnedProps.go('foo')

      expect(toggleMenu.mock.calls[0]).toEqual([false])
      expect(push.mock.calls[0]).toEqual(['foo'])
    })
  })
})
