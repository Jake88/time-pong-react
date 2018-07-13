import { connect } from 'react-redux'
import {
  toggleMenu,
  isMenuActive
} from '../../reducers/appReducer/AppReducer'
import {push} from "connected-react-router"

export const mapStateToProps = state => ({
  isMenuActive: isMenuActive(state)
})

export const mapDispatchToProps = dispatch => ({
  toggleMenu: forceFlag => dispatch(toggleMenu(forceFlag)),
  go: path => {
    dispatch(toggleMenu(false))
    dispatch(push(path))
  }
})

export const connecter = connect(mapStateToProps, mapDispatchToProps)
