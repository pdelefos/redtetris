class Player {
  constructor(id) {
    this.id = id
    this.username = null
    this.currentRoom = null
    this.board = null
    this.score = 0
    this.ready = true
  }

  updateUsername = username => {
    this.username = username
  }

  updateStatus = () => {
    this.ready = !this.ready
  }

  startGame = () => {
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
