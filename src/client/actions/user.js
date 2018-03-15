import { socket } from "../socket"

export const createUser = username => {
  socket.emit("createUser", username)
  return {
    type: "CREATE_USER",
    username
  }
}

export const joinRoom = hashName => {
  socket.emit("joinRoom", hashName)
  return {
    type: "JOIN_ROOM",
    hashName
  }
}
