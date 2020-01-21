// import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import { createLogger } from 'redux-logger'
//
// const rootReducer = combineReducers({
//   steps: Steps,
// })
//
// const loggerMiddleware = createLogger({
//   duration: true,
//   collapsed: true,
//   colors: {
//     title: () => '#139BFE',
//     prevState: () => '#1c5faf',
//     action: () => '#149945',
//     nextState: () => '#A47104',
//     error: () => '#ff0005',
//   },
// })
//
// const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// const composeEnhancers = devtools ? devtools : compose
//
// export const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)),
// )
