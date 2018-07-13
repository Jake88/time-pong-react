import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import {
  toggleMenu,
  isMenuActive
} from 'reducers/appReducer/AppReducer'

export const mapStateToProps = state => ({
  active: isMenuActive(state),
  current: state.router.location.pathname
})

export const mapDispatchToProps = dispatch => ({
  go: path => {
    dispatch(toggleMenu(false))
    dispatch(push(path))
  }
})

export const connecter = connect(mapStateToProps, mapDispatchToProps)
