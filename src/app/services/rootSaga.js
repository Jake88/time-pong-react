import { takeLatest } from 'redux-saga/effects'
import partial from 'lodash/partial'

// Import sagas
import { apiExtender } from './apiManager/saga'
import { runTimer } from './timer/saga'
import { signUp } from './auth/saga'

// Import actions from reducers
import { types as timerTypes } from './timer'
import { types as authTypes } from './auth'

export default function* rootSaga() {
  yield takeLatest(timerTypes.START_TIMER, runTimer) // TODO move take latest etc into the saga itself
  yield takeLatest(authTypes.SIGN_UP, partial(apiExtender, signUp))
}
