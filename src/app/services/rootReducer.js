import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import apiManager from './apiManager/reducer'
import auth from './auth/reducer'
import timer from './timer/reducer'
import app from './app/reducer'

export default combineReducers({
  form,
  [apiManager.NAME]: apiManager.reducer,
  [auth.NAME]: auth.reducer,
  [timer.NAME]: timer.reducer,
  [app.NAME]: app.reducer
})
