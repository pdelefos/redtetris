import Board from "./board"

class Player {
  constructor(socket) {
    this.id = socket.id
    this.socket = socket
    this.username = null
    this.currentRoom = null
    this.board = null
    this.ready = false
    this.currentPiece = null
    this.nextPiece = null
    this.idx = 0
    this.score = 0
    this.lineCompleted = 0
    this.done = false
    this.lock = false
  }

  reset = () => {
    this.board = null
    this.lock = false
    this.ready = false
    this.currentPiece = null
    this.nextPiece = null
    this.idx = 0
    this.done = false
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
    nextPiece: this.nextPiece,
    score: this.score,
    lineCompleted: this.lineCompleted,
    board: []
  })
}

export default Player
