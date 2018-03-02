import { combineReducers } from "redux"
import user from "./user"
import notifications from "./notifications"
import games from "./games"

const store = combineReducers({
  user,
  notifications,
  games
})

export default store
