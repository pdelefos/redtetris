import { socket } from "../socket"

const room = hashName => ({
  type: "JOIN_ROOM",
  hashName
})

const updateGame = game => ({
  type: "UPDATE_GAME",
  game
})

export const createUser = username => {
  socket.emit("createUser", username)
  return {
    type: "CREATE_USER",
    username
  }
}

export const joinRoom = hashName => {
  socket.emit("joinRoom", hashName)
  return room(hashName)
}

export const forceJoinRoom = dispatch => {
  socket.on("forceJoinRoom", hashName => {
    dispatch(room(hashName))
  })
}

export const startGame = () => {
  socket.emit("startGame")
}

export const updateGame = dispatch => {
  socket.on("updateGame", game => {
    dispatch(updateGame(game))
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
