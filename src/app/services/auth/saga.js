import { takeLatest, call, select, put } from 'redux-saga/effects'
import Firebase from 'utils/firebase'
import { getFormValues } from 'redux-form'
import FormNames from 'utils/constants/formNames'
import ApiManager from 'services/apiManager/saga'
import {types as authTypes} from './'

function* signUp () {
  try {
    const { email, password } = yield select(getFormValues(FormNames.SIGN_UP))
    const response = yield call(Firebase.doCreateUserWithEmailAndPassword, email, password)
    console.log('Successfully create user!', response)
    // TODO: Put the returned user into the auth reducer
    return response
  } catch (err) {
    console.log('Error getting user', err)
    throw(err)
  }
}

export default {
  signUp: takeLatest(authTypes.SIGN_UP, ApiManager.addStatus(signUp))
}