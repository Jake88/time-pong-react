// types
export const SIGN_UP = 'AUTH/SIGN_UP'

// actions
export const signUp = () => ({type: SIGN_UP})

// initial state
const initialState = {

}

// reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state
      }
    default:
      return state
  }
}

// selectors
export const getAuth = ({auth}) => auth