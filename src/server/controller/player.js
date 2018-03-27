import Board from "./board"

class Player {
  constructor(socket) {
    this.id = socket.id
    this.socket = socket
    this.username = null
    this.currentRoom = null
    this.board = null
    this.score = 0
    this.ready = false
  }

  updateUsername = username => {
    this.username = username
  }

  updateStatus = () => {
    this.ready = !this.ready
  }

  initGame = () => {
    this.board = new Board()
  }

  joinGame = () => {
    this.score = 0
    this.ready = false
    this.board = null
  }

  updateCurrentRoom = hashName => {
    this.currentRoom = hashName
  }

  toJSON = () => ({
    username: this.username,
    ready: this.ready,
    score: this.score
  })
}

export default Player
