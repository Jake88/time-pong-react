export const NAME = 'apiManager'

// types
export const types = {
  API_REQUEST: 'API/REQUEST',
  API_SUCCESS: 'API/SUCCESS',
  API_ERROR: 'API/ERROR'
}

// actions
export const actions = {
  apiRequest: key => ({type: types.API_REQUEST, key}),
  apiSuccess: key => ({type: types.API_SUCCESS, key}),
  apiError: (key, err) => ({type: types.API_ERROR, key, err})

}

// selectors
export const selectors = {
  getRequestStatus: (state, key) => state[NAME][key] || {}
}
