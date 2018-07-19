import { call, put } from 'redux-saga/effects'
import { apiRequest, apiError, apiSuccess } from '../../reducers/apiReducer/ApiReducer'

export function* apiExtender (apiFunction, action) {
  try {
    yield put(apiRequest(action.type))
    yield call(apiFunction, action)
    yield put(apiSuccess(action.type))
  } catch (err) {
    yield put(apiError(action.type, err))
  }
}
