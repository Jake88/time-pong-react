import { takeLatest, call, select, put } from 'redux-saga/effects'
import Firebase from 'utils/firebase'
import { getFormValues } from 'redux-form'
import FormNames from 'utils/constants/formNames'
import ApiManager from 'services/apiManager/saga'
import {
  actions as authActions,
  types as authTypes
} from './'

function* signUp () {
  try {
    const { email, password } = yield select(getFormValues(FormNames.SIGN_UP))
    const response = yield call(Firebase.doCreateUserWithEmailAndPassword, email, password)
    console.log('Successfully created user!', response)
    yield put(authActions.setUser(response.user))
    return response
  } catch (err) {
    console.log('Error getting user', err)
    throw(err)
  }
}

function* signIn () {
  console.log('signing in?')
  try {
    const { email, password } = yield select(getFormValues(FormNames.SIGN_IN))
    const response = yield call(Firebase.doSignInWithEmailAndPassword, email, password)
    console.log('Successfully created user!', response)
    yield put(authActions.setUser(response.user))
    return response
  } catch (err) {
    console.log('Error getting user', err)
    throw(err)
  }
}

function* resetPassword () {
  try {
    const { email } = yield select(getFormValues(FormNames.RESET_PASSWORD))
    const response = yield call(Firebase.doPasswordReset, email)
    console.log('Successfully reset password!', response)
    return response
  } catch (err) {
    console.log('Error resetting password', err)
    if (err.code === 'auth/user-not-found') err.code = 'auth/user-not-found-alt'
    throw(err)
  }
}

function* updatePassword () {
  try {
    const { password } = yield select(getFormValues(FormNames.UPDATE_PASSWORD))
    const response = yield call(Firebase.doPasswordUpdate, password)
    console.log('Successfully updated password!', response)
    return response
  } catch (err) {
    console.log('Error updating password', err)
    throw(err)
  }
}

function* signOut () {
  try {
    const response = yield call(Firebase.doSignOut)
    console.log('Successfully signed out!', response)
    return response
  } catch (err) {
    console.log('Error signing out', err)
    throw(err)
  }
}

export default {
  signUp: takeLatest(authTypes.SIGN_UP, ApiManager.addStatus(signUp)),
  signIn: takeLatest(authTypes.SIGN_IN, ApiManager.addStatus(signIn)),
  signOut: takeLatest(authTypes.SIGN_OUT, ApiManager.addStatus(signOut)),
  resetPassword: takeLatest(authTypes.RESET_PASSWORD, ApiManager.addStatus(resetPassword)),
  updatePassword: takeLatest(authTypes.UPDATE_PASSWORD, ApiManager.addStatus(updatePassword))
}
