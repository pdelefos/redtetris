import { socket } from "../socket"

let nextRoomId = 0

const room = newRoom => ({
  type: "ADD_ROOM",
  id: nextRoomId++,
  newRoom
})

export const deleteRoom = id => ({
  type: "DELETE_ROOM",
  id
})

export const addRoom = dispatch => {
  socket.on("addRoom", newRoom => {
    dispatch(room(newRoom))
  })
}

export const createRoom = roomName => {
  socket.emit("createRoom", roomName)
}

export const fetchRoomList = () => {
  socket.emit("fetchRoomList")
}

export const updateRoomList = dispatch => {
  socket.on("updateRoomList", rooms => {
    rooms.map(newRoom => {
      dispatch(room(newRoom))
    })
  })
}
