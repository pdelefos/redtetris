import { socket } from "../socket"

const game = hashName => ({
  type: "JOIN_GAME",
  game
})

const updatedGame = game => ({
  type: "UPDATE_GAME",
  game
})

export const updateGame = dispatch => {
  socket.on("updateGame", game => {
    dispatch(updatedGame(game))
  })
}

export const forceJoinGame = dispatch => {
  socket.on("forceJoinGame", hashName => {
    dispatch(Game(hashName))
  })
}

export const playerReady = () => {
  socket.emit("playerReady")
}
export const joinGame = game => {
  return game(game)
}

export const startGame = () => {
  socket.emit("startGame")
}
