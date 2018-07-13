import { takeLatest } from 'redux-saga/effects'

// Import sagas
import {
  runTimer
} from 'sagas/timerSaga/TimerSaga'

// Import actions from reducers
import {
  START_TIMER
} from 'reducers/timerReducer/TimerReducer'

export default function* rootSaga() {
  yield takeLatest(START_TIMER, runTimer)
}
