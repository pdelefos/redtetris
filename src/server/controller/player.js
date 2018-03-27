class Player {
  constructor(id) {
    this.id = id
    this.username = null
    this.currentRoom = null
    this.board = null
    this.score = 0
    this.status = 0
  }

  updateUsername = username => {
    this.username = username
  }

  updateStatus = status => {
    this.status = status
  }

  startGame = () => {
    this.board = new Board()
  }

  joinGame = () => {
    this.score = 0
    this.status = 0
    this.board = null
  }

  updateCurrentRoom = hashName => {
    this.currentRoom = hashName
  }

  toJSON = () => ({
    username: this.username,
    status: this.status,
    score: this.score
  })
}

export default Player
