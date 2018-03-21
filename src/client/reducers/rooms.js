import omit from "lodash/omit"

const rooms = (state = {}, action) => {
	switch (action.type) {
		case "ADD_ROOM":
			return {
				...state,
				[action.newRoom.hashName]: action.newRoom
			}
		case "UPDATE_ROOM":
			return {
				...state,
				[action.newRoom.hashName]: action.newRoom
			}
		case "DELETE_ROOM":
			return omit(state, action.hashName)
		default:
			return state
	}
}

export default rooms
