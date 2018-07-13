import { connect } from 'react-redux'
import { formatTime } from '../../utils/Utils'
import {
  getMaxTime,
  getMinTime,
  getFormattedTime,
  startTimer
} from 'reducers/timerReducer/TimerReducer'

export const mapStateToProps = state => {

  return {
    currentTime: getFormattedTime(state)
  }
}

export const mapDispatchToProps = dispatch => ({
  startTimer: () => dispatch(startTimer())
})

export const connecter = connect(mapStateToProps, mapDispatchToProps)
