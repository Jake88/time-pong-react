import { NAME, types } from './'

// initial state
const initialState = {}

// reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}

export default {
  NAME,
  reducer
}
