import { socket } from "../socket"
import { setInterval } from "timers"

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

export const createGame = gameName => {
  socket.emit("createGame", gameName)
}

export const fetchGameList = () => {
  socket.emit("fetchGameList")
}

export const updateGameList = dispatch => {
  socket.on("updateGameList", games => {
    games.map(newGame => {
      dispatch(game(newGame))
    })
  })
}

export const deleteGame = id => ({
  type: "DELETE_GAME",
  id
})
