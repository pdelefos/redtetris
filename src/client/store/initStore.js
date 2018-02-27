import { applyMiddleware, createStore, compose } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"

import store from "../reducers"

const middleware = applyMiddleware(thunk, logger)
let finalStore = createStore(
  store,
  compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default finalStore
