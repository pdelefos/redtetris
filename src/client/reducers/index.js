import { combineReducers } from 'redux'
import user from './user'
import notification from './notification'

const store = combineReducers({
	user,
	notification
})

export default store