export const NAME = 'apiManager'

// types
export const types = {
  API_REQUEST: 'API/REQUEST',
  API_SUCCESS: 'API/SUCCESS',
  API_ERROR: 'API/ERROR',
  API_RESET: 'API/RESET'
}

// actions
export const actions = {
  apiRequest: originalAction => ({type: types.API_REQUEST, originalAction}),
  apiSuccess: key => ({type: types.API_SUCCESS, key}),
  apiError: (key, err) => ({type: types.API_ERROR, key, err}),
  apiReset: key => ({type: types.API_RESET, key})
}

// selectors
export const selectors = {
  getRequestStatus: (state, key) => state[NAME][key] || { undefined: true }
}
