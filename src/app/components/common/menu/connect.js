import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import {
  actions,
  selectors
} from 'services/app'

export const mapStateToProps = state => ({
  active: selectors.isMenuActive(state),
  current: state.router.location.pathname
})

export const mapDispatchToProps = dispatch => ({
  go: path => {
    dispatch(actions.toggleMenu(false))
    dispatch(push(path))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)
