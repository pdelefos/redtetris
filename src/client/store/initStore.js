import { applyMiddleware, createStore, compose } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"

import tetriStore from "../reducers"

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancers(
  applyMiddleware(thunk, logger)
  // other store enhancers if any
)

let store = createStore(tetriStore, enhancer)

export default store
