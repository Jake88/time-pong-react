export const NAME = 'auth'

// types
export const types = {
  SIGN_UP: 'AUTH/SIGN_UP',
  SIGN_IN: 'AUTH/SIGN_IN',
  SIGN_OUT: 'AUTH/SIGN_OUT',
  RESET_PASSWORD: 'AUTH/RESET_PASSWORD',
  UPDATE_PASSWORD: 'AUTH/UPDATE_PASSWORD',
  SET_USER: 'AUTH/SET_USER'
}

// actions
export const actions = {
  signUp: () => ({type: types.SIGN_UP}),
  signIn: () => ({type: types.SIGN_IN}),
  signOut: () => ({type: types.SIGN_OUT}),
  resetPassword: () => ({type: types.RESET_PASSWORD}),
  updatePassword: () => ({type: types.UPDATE_PASSWORD}),
  setUser: user => ({type: types.SET_USER, user})
}

// selectors
export const selectors = {
  getUser: state => state[NAME].user
}
