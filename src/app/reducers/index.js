import { combineReducers } from 'redux'
import {reducer as form } from 'redux-form'

import apis from './apiReducer/ApiReducer'
import app from './appReducer/AppReducer'
import timer from './timerReducer/TimerReducer'
import auth from './authReducer/AuthReducer'

export default combineReducers({
  form,
  apis,
  app,
  timer,
  auth
})
