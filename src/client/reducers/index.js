import { combineReducers } from 'redux'
import user from './user'
import notifications from './notifications'

const store = combineReducers({
	user,
	notifications
})

export default store