// types
export const SET_CURSE = 'APP/SET_CURSE'
export const SET_SPELL = 'APP/SET_SPELL'
export const SET_ACTIVE_CARD = 'APP/SET_ACTIVE_CARD'
export const TOGGLE_MENU = 'APP/TOGGLE_MENU'

// actions
export const setCurse = card => ({type: SET_CURSE, card})
export const setSpell = card => ({type: SET_SPELL, card})
export const setActiveCard = card => ({type: SET_ACTIVE_CARD, card})
export const toggleMenu = forceFlag => ({type: TOGGLE_MENU, forceFlag})

// reducers
export default (state = {}, action) => {
  switch (action.type) {
    case SET_CURSE:
      return {
        ...state,
        curse: action.card
      }
    case SET_SPELL:
      return {
        ...state,
        spell: action.card
      }
    case SET_ACTIVE_CARD:
      return {
        ...state,
        activeCard: action.card
      }
    case TOGGLE_MENU:
      return {
        ...state,
        menuActive: typeof action.forceFlag === "undefined" ? !state.menuActive : action.forceFlag
      }
    default:
      return state
  }
}

// selectors
export const getCurrentCurse = ({app}) => app.curse
export const getCurrentSpell = ({app}) => app.spell
export const getActiveCard = ({app}) => app.activeCard
export const isMenuActive = ({app}) => app.menuActive