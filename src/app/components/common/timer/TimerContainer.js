import { connect } from 'react-redux'
import {
  selectors,
  actions
} from 'services/timer'

export const mapStateToProps = state => {

  return {
    currentTime: selectors.getFormattedTime(state)
  }
}

export const mapDispatchToProps = dispatch => ({
  startTimer: () => dispatch(actions.startTimer())
})

export const connecter = connect(mapStateToProps, mapDispatchToProps)
