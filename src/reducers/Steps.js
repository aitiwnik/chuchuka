const SET_CUSTOMER_INFO = 'SET_CUSTOMER_INFO'
const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER'
const SET_VERIFIED = 'SET_VERIFIED'
const RESET_STEPS = 'RESET_STEPS'

export const setCustomerInfo = payload => ({ type: SET_CUSTOMER_INFO, payload })
export const setPhoneNumber = payload => ({ type: SET_PHONE_NUMBER, payload })
export const setVerified = payload => ({ type: SET_VERIFIED, payload })
export const resetSteps = payload => ({ type: RESET_STEPS, payload })

const DEFAULT_STATE = {
  step: 'SelectCustomer',
  customer: '',
  phoneNumber: '',
  code: '',
}

export const stepsReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_CUSTOMER_INFO:
      return { ...state, customer: payload, step: 'EnterNumber' }
    case SET_PHONE_NUMBER:
      return { ...state, phoneNumber: payload, step: 'VerificationCode' }
    case SET_VERIFIED:
      return { ...state, step: 'Verified' }
    case RESET_STEPS:
      return { ...state, ...DEFAULT_STATE }
    default:
      return state
  }
}
