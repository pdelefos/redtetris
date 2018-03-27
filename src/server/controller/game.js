class Game {
  constructor() {
    this.players = {}
    this.status = 0
    this.mode = 0
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
}
