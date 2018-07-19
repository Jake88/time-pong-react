import { takeLatest } from 'redux-saga/effects'
import partial from 'lodash/partial'

// Import sagas
import { apiExtender } from 'sagas/apiSaga/ApiSaga'
import { runTimer } from 'sagas/timerSaga/TimerSaga'
import { signUp } from 'sagas/authSaga/AuthSaga'

// Import actions from reducers
import { START_TIMER } from 'reducers/timerReducer/TimerReducer'
import { SIGN_UP } from 'reducers/authReducer/AuthReducer'

export default function* rootSaga() {
  yield takeLatest(START_TIMER, runTimer)
  yield takeLatest(SIGN_UP, partial(apiExtender, signUp))
}
