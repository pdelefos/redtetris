import { socket } from "../socket"

const updatedBoard = (board, id) => ({
  type: "UPDATE_BOARD",
  board,
  id
})

export const updateBoard = dispatch => {
  socket.on("updateBoard", data => {
    dispatch(updatedBoard(data.board, data.id))
  })
}

export const moveLeft = () => {
  socket.emit("moveLeft")
}

export const moveRight = () => {
  socket.emit("moveRight")
}

export const moveDown = () => {
  socket.emit("moveDown")
}

export const moveUp = () => {
  socket.emit("moveUp")
}

export const pushDown = () => {
  socket.emit("pushDown")
}
