import { NAME, types } from './'
// initial state
const initialState = {}

// reducers
const reducer = (state = initialState, action) => {
  const newState = {...state}

  switch (action.type) {
    case types.API_REQUEST:
      newState[action.originalAction.type] = {
        originalAction: action.originalAction,
        loading: true
      }
      return newState
    case types.API_SUCCESS:
      newState[action.key] = {
        originalAction: newState[action.key].originalAction,
        success: true
      }
      return newState
    case types.API_ERROR:
      newState[action.key] = {
        originalAction: newState[action.key].originalAction,
        error: action.err
      }
      return newState
    case types.API_RESET:
      newState[action.key] = undefined
      return newState
    default:
      return state
  }
}

export default {
  reducer,
  NAME
}

