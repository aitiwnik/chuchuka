import { getCode } from '../api/http';
import { subscribeToVerification } from '../api/socket';
import { toast } from 'react-toastify';

export const GET_CODE = 'GET_CODE';
export const GET_CODE_LOADING = 'GET_CODE_LOADING';
export const GET_CODE_SUCCESS = 'GET_CODE_SUCCESS';
export const GET_CODE_ERROR = 'GET_CODE_ERROR';
export const CODE_VERIFIED = 'CODE_VERIFIED';

const codeLoading = () => ({ type: GET_CODE_LOADING });
const codeSuccess = (payload) => ({ type: GET_CODE_SUCCESS, payload });
const codeError = (payload) => ({ type: GET_CODE_ERROR, payload });
const codeVerified = () => ({ type: CODE_VERIFIED });

export const getCodeRequest = (phoneNumber, customer) => {
  return async (dispatch) => {
    try {
      dispatch(codeLoading());
      const { data: { code } } = await getCode({ phoneNumber, customer });
      subscribeToVerification(
        phoneNumber,
        () => dispatch(codeVerified()),
        ({ message }) => {
          toast.error(message);
          dispatch(codeError(message));
        }
      );
      dispatch(codeSuccess(code));
    } catch (error) {
      const message = error.response ? error.response.data.message : error.message;
      toast.error(message);
      dispatch(codeError(message));
    }
  };
};

const DEFAULT_STATE = {
  code: '',
  loading: false,
  error: '',
  verified: false
};

export default function reducer(state = DEFAULT_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CODE_LOADING:
      return { ...state, error: '', loading: true };
    case GET_CODE_SUCCESS:
      return { ...state, code: payload, loading: false };
    case GET_CODE_ERROR:
      return { ...state, error: payload, loading: false };
    case CODE_VERIFIED:
      return { ...state, verified: true };
    default:
      return state;
  }
}
