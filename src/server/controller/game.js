import crypto from "crypto"

class Game {
  constructor(params) {
    this.hashName = crypto.randomBytes(20).toString("hex")
    this.gameName = params.gameName
    this.io = params.io
    this.players = {}

    this.io.sockets.emit("gameCreated", this.hashName)
    console.log("Game created, hash room name: ", this.hashName)
  }

  addPlayer = player => {
    if (Object.keys(this.players).length <= 3) {
      this.players[player.id] = player
      player.socket.join(this.hashName)
      this.io
        .to(this.hashName)
        .emit(
          "notification",
          `The player ${player.username} has joined the game !`
        )
    } else
      player.socket.emit(
        "fullRoom",
        "The room you are trying to join is full"
      )
  }

  deletePlayer = player => {
    if (player.id in this.players) {
      delete this.players[player.id]
      player.socket.broadcast
        .to(this.hashName)
        .emit(
          "notification",
          `The player ${player.name} has left the game !`
        )
      socket.leave(this.hashName)
    }
  }

  _to_json = () => {
    return {
      players: Object.values(this.players).map(player => ({
        username: player.username,
        id: player.id
      })),
      hashName: this.hashName,
      gameName: this.gameName
    }
  }
}

export { Game }
