import { combineReducers } from 'redux'
import move from './move'

const tetriStore = combineReducers({
  move
})

export default tetriStore