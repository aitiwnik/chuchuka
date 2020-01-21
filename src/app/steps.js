import SelectCustomer from '../pages/SelectCustomer/'
import EnterNumber from '../pages/EnterNumber/'
import VerificationCode from '../pages/VerificationCode/'
import Verified from '../pages/Verified/'
import ContactUs from '../pages/ContactUs/'
import Login from '../pages/Login'

export default [
  {
    name: 'SelectCustomer',
    path: '/select-customer',
    component: SelectCustomer,
  },
  {
    name: 'EnterNumber',
    path: '/enter-number',
    component: EnterNumber,
  },
  {
    name: 'VerificationCode',
    path: '/verification-code',
    component: VerificationCode,
  },
  {
    name: 'Verified',
    path: '/verified',
    component: Verified,
  },
  {
    name: 'Contact Us',
    path: '/contactUs',
    component: ContactUs,
  },
]
