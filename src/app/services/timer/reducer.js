import { NAME, types } from './'

const initialState = {
  minTime: 2000,
  maxTime: 4000,
  running: false
}

// reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_TIMER:
      return {
        ...state,
        running: true
      }
    case types.SET_TIME:
      return {
        ...state,
        currentTime: action.time
      }
    default:
      return {...state}
  }
}

export default {
  NAME,
  reducer
}