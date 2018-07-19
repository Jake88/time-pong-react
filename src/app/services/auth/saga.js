import { call, select, put } from 'redux-saga/effects'
import { getFormValues } from 'redux-form'
import FormNames from 'utils/constants/formNames'
import Firebase from 'utils/firebase'

import {
} from './'

export function* signUp ({type}) {
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
