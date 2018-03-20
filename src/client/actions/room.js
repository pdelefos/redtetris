import { socket } from "../socket"

const room = newRoom => ({
	type: "ADD_ROOM",
	newRoom
})

export const createRoom = roomName => {
	socket.emit("createRoom", roomName)
}

export const fetchRoomList = () => {
	socket.emit("fetchRoomList")
}

export const addPlayer = dispatch => {
	socket.on("addPlayer", player =>
		dispatch({
			type: "ADD_PLAYER",
			player
		})
	)
}

export const deletePlayer = dispatch => {
	socket.on("deletePlayer", player =>
		dispatch({
			type: "DELETE_PLAYER",
			player
		})
	)
}

export const addRoom = dispatch => {
	socket.on("addRoom", newRoom => {
		dispatch(room(newRoom))
	})
}

export const createRoomList = dispatch => {
	socket.on("updateRoomList", rooms => {
		rooms.map(newRoom => {
			dispatch(room(newRoom))
		})
	})
}

export const updateRoom = dispatch => {
	socket.on("updateRoom", newRoom => {
		dispatch(({
			type: "UPDATE_ROOM",
			newRoom
		}))
	})
}

export const deleteRoom = dispatch => {
	socket.on('deleteRoom', hashName => {
		dispatch({
			type: "DELETE_ROOM",
			hashName
		})
	})
}