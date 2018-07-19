import { NAME, types } from './'

// initial state
const initialState = {}

// reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_UP:
      return {
        ...state
      }
    default:
      return state
  }
}

export default {
  NAME,
  reducer
}