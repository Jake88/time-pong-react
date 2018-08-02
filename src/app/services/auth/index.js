export const NAME = 'auth'

// types
export const types = {
  SIGN_UP: 'AUTH/SIGN_UP',
  SIGN_IN: 'AUTH/SIGN_IN',
  SET_USER: 'AUTH/SET_USER'
}

// actions
export const actions = {
  signUp: () => ({type: types.SIGN_UP}),
  signIn: () => ({type: types.SIGN_IN}),
  setUser: user => ({type: types.SET_USER, user})
}

// selectors
export const selectors = {
  getUser: state => state[NAME].user
}
