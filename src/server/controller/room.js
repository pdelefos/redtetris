class Room {
  constructor(socket) {
    this.hashName = crypto.randomBytes(20).toString("hex")
    this.socket = socket
    this.admin = socket.id
    this.players = [socket.id]

    socket.emit("gameCreated", this.hashName)
    console.log("Game created, hash room name: ", this.hashName)
    this.addPlayer()
    this.removePlayer()
  }

  addPlayer = () => {
    this.socket.on("joinGame", socket => {
      if (this.players.length <= 3) {
        this.players.push(socket.id)
        socket.join(this.hashName)
      } else socket.emit("fullRoom", "The room you are trying to join is full")
    })
  }

  removePlayer = () => {
    this.socket.on("leaveRoom", socket => {
      socket.broadcast.to(this.hashName).emit("playerLeft", socket.id)
      socket.leave(this.hashName)
      this.players = this.players.splice(this.players.indexOf(socket.id), 1)
      if (this.players.length > 0 && this.admin == socket.id)
        this.changeAdmin(this.players[0])
    })
  }

  changeAdmin = () => {
    this.admin = socket.broadcast
      .to(this.hashName)
      .emit("changeAdmin", this.admin)
  }
}

export { Room }
