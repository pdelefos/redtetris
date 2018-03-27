class Game {
  constructor(hashName) {
    this.players = {}
    this.status = "About to start"
    this.mode = "Normal"
    this.hashName = hashName
  }

  addPlayer = player => {
    this.players[player.id] = player
    this.updateStatus()
  }

  removePlayer = id => {
    delete this.players[id]
    this.updateStatus()
  }

  updateStatus = () => {
    let playerCount = Object.keys(this.players).length
    if (playerCount === 4) this.status = "Full"
    else this.status = "About to start"
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
