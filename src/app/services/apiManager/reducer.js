import { NAME, types } from './'
// initial state
const initialState = {}

// reducers
const reducer = (state = initialState, action) => {
  const newState = {...state}

  switch (action.type) {
    case types.API_REQUEST:
      newState[action.key] = { loading: true }
      return newState
    case types.API_SUCCESS:
      newState[action.key] = { loading: false }
      return newState
    case types.API_ERROR:
      newState[action.key] = { loading: false, error: action.err }
      return newState
    default:
      return state
  }
}

export default {
  reducer,
  NAME
}

