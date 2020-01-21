const baseURL = process.env.REACT_APP_SERVER_ORIGIN

export const URL = {
  signIn: baseURL + '/login',
  signUp: baseURL + '/registration',
}
