import { combineReducers } from 'redux'
import {reducer as form } from 'redux-form'

import app from './appReducer/AppReducer'
import timer from './timerReducer/TimerReducer'

export default combineReducers({
  form,
  app,
  timer
})
