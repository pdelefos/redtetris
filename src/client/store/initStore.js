import { applyMiddleware, createStore, compose } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"

import store from "../reducers"

// <<<<<<< HEAD
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancers(
  applyMiddleware(thunk, logger)
  // other store enhancers if any
)

let finalStore = createStore(store, enhancer)

export default finalStore
// =======
// const middleware = applyMiddleware(thunk, logger)
// let finalStore = createStore(
//   store,
//   compose(
//     middleware,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// )

// export default finalStore
// >>>>>>> connection
