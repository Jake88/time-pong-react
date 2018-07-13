jest.mock('reducers/appReducer', () => ({
  // actions
  setCurse: jest.fn().mockReturnValue('setCurse'),
  setSpell: jest.fn().mockReturnValue('setSpell'),
  setActiveCard: jest.fn().mockReturnValue('setActiveCard'),
  toggleMenu: jest.fn().mockReturnValue('toggleMenu'),

  // selectors
  getCurrentCurse: jest.fn().mockReturnValue('getCurrentCurse'),
  getCurrentSpell: jest.fn().mockReturnValue('getCurrentSpell'),
  getActiveCard: jest.fn().mockReturnValue('getActiveCard'),
  isMenuActive: jest.fn().mockReturnValue('isMenuActive')
}))
