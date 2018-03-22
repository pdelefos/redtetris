import { socket } from "../socket"

const room = newRoom => ({
  type: "JOIN_ROOM",
  newRoom
})

export const playerReady = () => {
  socket.emit("playerReady")
}

export const createUser = username => {
  socket.emit("createUser", username)
  return {
    type: "CREATE_USER",
    username
  }
}

export const updateUserRoom = dispatch => {
  socket.on("updateUserRoom", room => {
    dispatch({
      type: "UPDATE_USER_ROOM",
      room
    })
  })
}

export const joinRoom = hashName => {
  socket.emit("joinRoom", hashName)
  return room(hashName)
}

export const forceJoinRoom = dispatch => {
  socket.on("forceJoinRoom", newRoom => {
    dispatch(room(newRoom))
  })
}
