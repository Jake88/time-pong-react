import { all } from 'redux-saga/effects'
import map from 'lodash/map'

// Import sagas
import TimerSaga from './timer/saga'
import AuthSaga from './auth/saga'

export default function* rootSaga() {
  yield all([
    ...map(TimerSaga),
    ...map(AuthSaga)
  ])
}
