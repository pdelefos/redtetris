import { socket } from "../socket"

const updatedGame = game => ({
  type: "UPDATE_GAME",
  game
})

export const updateGame = dispatch => {
  socket.on("updateGame", game => {
    dispatch(updatedGame(game))
  })
}

export const joinGame = hashName => {
  socket.emit("joinGame", hashName)
}

export const startGame = () => {
  socket.emit("startGame")
}
