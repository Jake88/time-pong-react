import { call, put } from 'redux-saga/effects'
import partial from 'lodash/partial'
import { actions } from './'
import ErrorMaps from 'utils/mappers/errors'

const { apiRequest, apiError, apiSuccess } = actions

export function* addStatus (apiFunction, action) {
  try {
    yield put(apiRequest(action))
    yield call(apiFunction, action)
    yield put(apiSuccess(action.type))
  } catch (err) {
    console.log('Critical error thrown during', action, err)
    const message = ErrorMaps[err.code] || ErrorMaps.default
    yield put(apiError(action.type, message))
  }
}

export default {
  addStatus: fnToExtend => partial(addStatus, fnToExtend)
}