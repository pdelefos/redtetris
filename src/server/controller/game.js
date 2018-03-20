import crypto from "crypto"

class Game {
  constructor(params) {
    this.hashName = crypto.randomBytes(4).toString("hex")
    this.gameName = params.gameName
    this.io = params.io
    this.players = {}

    // this.io.sockets.emit("gameCreated", this.hashName)
    console.log("Game created, hash room name: ", this.hashName)
  }

  addPlayer = player => {
    if (Object.keys(this.players).length <= 3) {
      player.score = 0
      player.ready = false
      this.players[player.id] = player
      player.socket.join(this.hashName)
      this.io
        .to(this.hashName)
        .emit(
          "notification",
          `The player ${player.username} has joined the game !`
        )
    } else
      player.socket.emit("fullRoom", "The room you are trying to join is full")
  }

  deletePlayer = player => {
    if (player.id in this.players) {
      delete this.players[player.id]
      player.socket.broadcast
        .to(this.hashName)
        .emit("notification", `The player ${player.name} has left the game !`)
      player.socket.leave(this.hashName)
    }
  }

  _to_json = () => {
    let players = {}
    Object.values(this.players).forEach(player => {
      let finalPlayer = { ...player }
      delete finalPlayer["socket"]
      players[player.id] = finalPlayer
    })
    return {
      players: players,
      hashName: this.hashName,
      gameName: this.gameName
    }
  }
}

export default Game
