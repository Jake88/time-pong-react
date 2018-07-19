export const NAME = 'app'

// types
export const types = {
  SET_CURSE: 'APP/SET_CURSE',
  SET_SPELL: 'APP/SET_SPELL',
  SET_ACTIVE_CARD: 'APP/SET_ACTIVE_CARD',
  TOGGLE_MENU: 'APP/TOGGLE_MENU'
}

// actions
export const actions = {
  setCurse: card => ({type: types.SET_CURSE, card}),
  setSpell: card => ({type: types.SET_SPELL, card}),
  setActiveCard: card => ({type: types.SET_ACTIVE_CARD, card}),
  toggleMenu: forceFlag => ({type: types.TOGGLE_MENU, forceFlag})
}

// selectors
export const selectors = {
  getCurrentCurse: state => state[NAME].curse,
  getCurrentSpell: state => state[NAME].spell,
  getActiveCard: state => state[NAME].activeCard,
  isMenuActive: state => state[NAME].menuActive
}
