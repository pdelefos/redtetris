import { combineReducers } from "redux"
import user from "./user"
import notifications from "./notifications"
import rooms from "./rooms"

const store = combineReducers({
  user,
  notifications,
  rooms
})

export default store
