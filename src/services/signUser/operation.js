import axios from 'axios'
import { URL } from '../baseURL'
import { signIn } from './actions'

export const login = credentials => dispatch => {
  dispatch(signIn.request())

  const options = {
    method: 'GET',
    url: URL.signIn,
    data: credentials,
  }

  axios(options)
    .then(({ data }) => dispatch(signIn.success(data)))
    .catch(({ message }) => dispatch(signIn.error(message)))
}
