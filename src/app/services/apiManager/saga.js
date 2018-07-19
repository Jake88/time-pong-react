import { call, put } from 'redux-saga/effects'
import partial from 'lodash/partial'
import { actions } from './'

const { apiRequest, apiError, apiSuccess } = actions

export function* addStatus (apiFunction, action) {
  try {
    yield put(apiRequest(action.type))
    yield call(apiFunction, action)
    yield put(apiSuccess(action.type))
  } catch (err) {
    yield put(apiError(action.type, err))
  }
}

export default {
  addStatus: fnToExtend => partial(addStatus, fnToExtend)
}