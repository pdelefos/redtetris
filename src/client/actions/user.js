import { socket } from "../socket"

const user = username => ({
  type: "UPDATE_USER",
  username
})

export const updateUser = username => {
  socket.emit("updateUser", username)
  return user(username)
}
