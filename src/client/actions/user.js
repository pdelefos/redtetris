import { socket } from "../socket"

const room = hashName => ({
  type: "JOIN_ROOM",
  hashName
})

export const createUser = username => {
  socket.emit("createUser", username)
  return {
    type: "CREATE_USER",
    username
  }
}

export const joinRoom = hashName => {
  socket.emit("joinRoom", hashName)
  return room(hashName)
}

export const forceJoinRoom = dispatch => {
  socket.on("forceJoinRoom", hashName => {
    dispatch(room(hashName))
  })
}
