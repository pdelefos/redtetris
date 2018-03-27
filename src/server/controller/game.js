class Game {
  constructor(hashName) {
    this.players = {}
    this.status = 0
    this.mode = 0
    this.hashName = hashName
  }

  addPlayer = player => {
    this.players[player.id] = player
  }

  removePlayer = id => {
    delete this.players[id]
  }

  updateStatus = status => {
    this.status = status
  }

  updateMode = mode => {
    this.mode = mode
  }

  toJSON = () => ({
    status: this.status,
    mode: this.mode,
    hashName: this.hashName,
    players: this.players
  })
}

export default Game
