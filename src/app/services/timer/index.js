import { formatTime } from '../../utils/Utils'

export const NAME = 'timer'

// types
export const types = {
  START_TIMER: 'TIMER/START',
  SET_TIME: 'TIMER/SET'
}

// actions
export const actions = {
  startTimer: () => ({type: types.START_TIMER}),
  setTime: time => ({type: types.SET_TIME, time})
}

// selectors
export const selectors = {
  getMinTime: state => state[NAME].minTime,
  getMaxTime: state => state[NAME].maxTime,
  getFormattedTime: state => state[NAME].currentTime && formatTime(state[NAME].currentTime),
  getRawTime: state => state[NAME].currentTime,
  isRunning: state => state[NAME].running
}
