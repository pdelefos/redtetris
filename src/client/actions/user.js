import { socket } from "../socket"

export const createUser = username => {
  socket.emit("createUser", username)
  return {
    type: "CREATE_USER",
    username
  }
}
