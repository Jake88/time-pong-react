// types
export const API_REQUEST = 'API/REQUEST'
export const API_SUCCESS = 'API/SUCCESS'
export const API_ERROR = 'API/ERROR'

// actions
export const apiRequest = key => ({type: API_REQUEST, key})
export const apiSuccess = key => ({type: API_SUCCESS, key})
export const apiError = (key, err) => ({type: API_ERROR, key, err})

// initial state
const initialState = {}

// reducers
export default (state = initialState, action) => {
  const newState = {...state}

  switch (action.type) {
    case API_REQUEST:
      newState[action.key] = { loading: true }
      return newState
    case API_SUCCESS:
      newState[action.key] = { loading: false }
      return newState
    case API_ERROR:
      newState[action.key] = { loading: false, error: action.err }
      return newState
    default:
      return state
  }
}

// selectors
export const getRequestStatus = ({apis}, key) => apis[key] || {}