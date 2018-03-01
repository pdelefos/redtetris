import crypto from "crypto"

class Game {
  constructor(socket) {
    this.hashName = crypto.randomBytes(20).toString("hex")
    this.socket = socket
    this.players = [socket.id]

    socket.emit("gameCreated", this.hashName)
    console.log("Game created, hash room name: ", this.hashName)
  }

  // removePlayer = () => {
  //   this.socket.on("leaveRoom", socket => {
  //     socket.broadcast.to(this.hashName).emit("playerLeft", socket.id)
  //     socket.leave(this.hashName)
  //     this.players = this.players.splice(this.players.indexOf(socket.id), 1)
  //   })
  // }

  _to_json = () => {
    return {
      players: this.players.length,
      hashName: this.hashName
    }
  }
}

export { Game }
