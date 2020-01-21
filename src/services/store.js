import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import { signUserReducer } from './signUser/reducer'

const rootReducer = combineReducers({
  signUser: signUserReducer,
})

const loggerMiddleware = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => '#139BFE',
    prevState: () => '#1c5faf',
    action: () => '#149945',
    nextState: () => '#A47104',
    error: () => '#ff0005',
  },
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware)),
)
