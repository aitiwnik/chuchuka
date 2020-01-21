export const actionTypes = {
  SIGN_IN_REQUEST: 'login/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: 'login/SIGN_IN_SUCCESS',
  SIGN_IN_ERROR: 'login/SIGN_IN_ERROR',
}

export const signIn = {
  request: () => ({
    type: actionTypes.SIGN_IN_REQUEST,
  }),
  success: payload => ({
    type: actionTypes.SIGN_IN_SUCCESS,
    payload,
  }),
  error: error => ({
    type: actionTypes.SIGN_IN_ERROR,
    payload: error,
  }),
}
