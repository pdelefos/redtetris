class Notification {
  constructor(io, socket) {
    this.io = io
    this.socket = socket
  }

  userNotification = message => {
    this.socket.emit("notification", message)
    console.log("[%s] Notification: %s", this.socket.id, message)
  }

  gameNotification = (hashName, message) => {
    this.io.to(hashName).emit("notification", message)
    console.log("[%s] Game notification: %s", hashName, message)
  }

  serverNotification = message => {
    this.io.sockets.emit("notification", message)
    console.log("[!!] Server notification: %s [!!]", message)
  }
}

export default Notification
