import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"

import tetriStore from "../reducers"

const middleware = applyMiddleware(thunk, logger)
let store = createStore(tetriStore, middleware)

export default store
