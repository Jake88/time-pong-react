import { select, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { types } from './'

const {
  getMinTime,
  getMaxTime,
  setTime
} = types

export function* runTimer () {
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
