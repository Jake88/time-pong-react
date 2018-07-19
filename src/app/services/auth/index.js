export const NAME = 'auth'

// types
export const types = {
  SIGN_UP: 'AUTH/SIGN_UP'
}

// actions
export const actions = {
  signUp: () => ({type: types.SIGN_UP})
}

// selectors
export const selectors = {
  getAuth: state => state[NAME]
}
