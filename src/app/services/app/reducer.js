import { NAME, types } from './'

// Initial state
const initialState = {
}

// reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURSE:
      return {
        ...state,
        curse: action.card
      }
    case types.SET_SPELL:
      return {
        ...state,
        spell: action.card
      }
    case types.SET_ACTIVE_CARD:
      return {
        ...state,
        activeCard: action.card
      }
    case types.TOGGLE_MENU:
      return {
        ...state,
        menuActive: typeof action.forceFlag === 'undefined' ? !state.menuActive : action.forceFlag
      }
    default:
      return state
  }
}

export default {
  NAME,
  reducer
}