import { socket } from "../socket"

const updatedUser = (username, id) => ({
  type: "UPDATE_USER",
  username,
  id
})

export const updateUser = username => {
  socket.emit("updateUser", username)
  return updatedUser(username, socket.id)
}
