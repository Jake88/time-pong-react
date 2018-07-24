import { connect } from 'react-redux'
import {
  selectors,
  actions
} from 'services/app'
import { push } from "connected-react-router"

export const mapStateToProps = state => ({
  isMenuActive: selectors.isMenuActive(state)
})

export const mapDispatchToProps = dispatch => ({
  toggleMenu: forceFlag => dispatch(actions.toggleMenu(forceFlag)),
  go: path => {
    dispatch(actions.toggleMenu(false))
    dispatch(push(path))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)
