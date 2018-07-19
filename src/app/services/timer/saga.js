import { takeLatest, select, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import {
  types,
  actions,
  selectors
} from './'

const { getMinTime, getMaxTime } = selectors
const { setTime } = actions

function* runTimer () {
  try {
    const minTime = yield select(getMinTime)
    const maxTime = yield select(getMaxTime)

    const newTime = Math.random() * (maxTime - minTime) + minTime

    yield put(setTime(newTime))

    yield delay(newTime)
    console.log('DING!')

    // setTimeout(() => doStuff(), newTime)

  } catch (err) {

  }
}

export default {
  runTimer: takeLatest(types.START_TIMER, runTimer)
}