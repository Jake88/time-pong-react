import {formatTime} from '../../utils/Utils'

// types
export const START_TIMER = 'TIMER/START'
export const SET_TIME = 'TIMER/SET'

// actions
export const startTimer = () => ({type: START_TIMER})
export const setTime = time => ({type: SET_TIME, time})

const defaultState = {
  minTime: 2000,
  maxTime: 4000,
  running: false
}

// reducers
export default (state = defaultState, action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        running: true
      }
    case SET_TIME:
      return {
        ...state,
        currentTime: action.time
      }
    default:
      return {...state}
  }
}

// selectors
export const getMinTime = ({timer}) => timer.minTime
export const getMaxTime = ({timer}) => timer.maxTime
export const getFormattedTime = ({timer}) => timer.currentTime && formatTime(timer.currentTime)
export const getRawTime = ({timer}) => timer.currentTime
export const isRunning = ({timer}) => timer.running