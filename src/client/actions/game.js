import { socket } from "../socket"

export const startGame = () => {
  socket.emit("startGame")
}

export const updateGame = dispatch => {
  socket.on("updateGame", game => {
    dispatch({
      type: "UPDATE_GAME",
      game
    })
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
