import { socket } from "../socket"

const room = newRoom => ({
  type: "ADD_ROOM",
  newRoom
})

const updatedRoom = room => ({
  type: "UPDATE_ROOM",
  newRoom
})

const deletedRoom = hashName => ({
  type: "DELETE_ROOM",
  hashName
})

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
    dispatch(updatedRoom(newRoom))
  })
}

export const deleteRoom = dispatch => {
  socket.on("deleteRoom", hashName => {
    dispatch(deletedRoom(hashName))
  })
}

export const createRoom = roomName => {
  socket.emit("createRoom", roomName)
}

export const fetchRoomList = () => {
  socket.emit("fetchRoomList")
}
