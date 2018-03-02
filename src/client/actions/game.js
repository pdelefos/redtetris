import { socket } from "../socket"

let nextGameId = 0

const game = newGame => ({
  type: "ADD_GAME",
  id: nextGameId++,
  newGame
})

export const addGame = dispatch => {
  socket.on("addGame", newGame => {
    dispatch(game(newGame))
  })
}

export const deleteGame = id => ({
  type: "DELETE_GAME",
  id
})
