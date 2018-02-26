import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"

import store from "../reducers"

const middleware = applyMiddleware(thunk, logger)
let finalStore = createStore(store, middleware)

export default finalStore
