import { socket } from "../socket"

const updatedGame = game => ({
  type: "UPDATE_GAME",
  game
})

const deletedPlayer = id => ({
  type: "DELETE_PLAYER",
  id
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

export const playerStatus = () => {
  socket.emit("playerStatus")
}

export const deletePlayer = dispatch => {
  socket.on("deletePlayer", id => {
    dispatch(deletedPlayer(id))
  })
}
