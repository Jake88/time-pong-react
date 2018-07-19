import { takeLatest } from 'redux-saga/effects'
import partial from 'lodash/partial'

// Import sagas
import { apiExtender } from './apiManager/saga'
import TimerSaga from './timer/saga'
import AuthSaga from './auth/saga'

// Import actions from reducers
import { types as timerTypes } from './timer'
import { types as authTypes } from './auth'

export default function* rootSaga() {
  yield TimerSaga.runTimer,
  yield AuthSaga.signUp
}
