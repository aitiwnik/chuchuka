import { actionTypes } from './actions'

const initialState = {
  token: '',
  isAuth: false,
}

export const signUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SIGN_IN_SUCCESS:
      return { ...state, isAuth: true, token: payload }
    case actionTypes.SIGN_IN_ERROR:
      return {...state, isAuth: true}
    default:
      return state
  }
}
