import Player from "./player"
import Room from "./room"
import Notification from "./notification"

class Manager {
  constructor(io) {
    this.io = io
    this.players = {}
    this.rooms = {}
    this.notification = null

    this.connection()
  }

  connection = () => {
    this.io.on("connection", socket => {
      this.players[socket.id] = new Player(socket.id)
      this.notification = new Notification(this.io, socket)

      this.updateUser(socket)
      this.deleteUser(socket)

      this.joinGame(socket)
      this.createRoom(socket)
      this.leaveRoom(socket)
      this.fetchRooms(socket)

      this.playerReady(socket)
    })
  }

  updateUser = socket => {
    socket.on("updateUser", username => {
      let oldUsername = this.players[socket.id].username
      this.players[socket.id].updateUsername(username)
      if (!oldUsername)
        this.notification.userNotification("User succesfully created")
      else this.notification.userNotification("User succesfully renamed")
    })
  }

  deleteUser = socket => {
    socket.on("disconnect", () => {
      this.notification.log(`[${socket.id}] Disconnect: Player destroyed`)
      this._leave(socket.id)
      delete this.players[socket.id]
    })
  }

  _join = (player, room) => {
    room.game.addPlayer(player)
    player.updateCurrentRoom(room.hashName)
    this.notification.gameNotification(
      room.hashName,
      `The player ${player.username} has joined the game !`
    )
  }

  createRoom = socket => {
    socket.on("createRoom", roomName => {
      let currentPlayer = this.players[socket.id]
      let newRoom = new Room(roomName)
      this.notification.log(`[${newRoom.hashName}] Room created`)

      socket.join(newRoom.hashName)
      this._join(currentPlayer, newRoom)

      this.rooms[newRoom.hashName] = newRoom
      this.io.sockets.emit("addRoom", newRoom)
      console.log("HIHIHI", newRoom.game)
      this.io.to(newRoom.hashName).emit("updateGame", newRoom.game)
    })
  }

  joinGame = socket => {
    socket.on("joinGame", hashName => {
      let currentPlayer = this.players[socket.id]
      if (hashName in this.rooms) {
        let room = this.rooms[hashName]
        if (room.playerCount() >= 4)
          this.notification.userNotification(
            "The room you are trying to join is full !"
          )
        else {
          socket.join(room.hashName)
          this._join(currentPlayer, room)
          this.updateRoom(hashName)
          this.io.to(room.hashName).emit("updateGame", room.game)
        }
      } else
        this.notification.userNotification(
          "The room you are trying to join doesnt exist"
        )
    })
  }

  _leave = id => {
    let currentPlayer = this.players[id]
    let hashName = currentPlayer.currentRoom
    if (hashName) {
      let room = this.rooms[hashName]
      room.game.removePlayer(id)

      if (room.playerCount() > 0) {
        currentPlayer.updateCurrentRoom(null)
        this.updateRoom(hashName)
      } else {
        delete this.rooms[hashName]
        this.io.sockets.emit("deleteRoom", hashName)
      }
    }
  }

  leaveRoom = socket => {
    socket.on("leaveRoom", () => {
      this._leave(socket.id)
    })
  }

  updateRoom = hashName => {
    this.io.sockets.emit("updateRoom", this.rooms[hashName])
  }

  playerReady = socket => {
    socket.on("playerReady", hashName => {
      let player = this.players[socket.id]
      if (hashName in this.rooms) {
        player.ready()
        this.updateRoom(hashName)
      }
    })
  }

  fetchRooms = socket => {
    socket.on("fetchRoomList", () => {
      socket.emit(
        "updateRoomList",
        Object.values(this.rooms).map(game => game)
      )
    })
  }

  // GAME LOGIC

  moveLeft = socket => {
    socket.on("moveLeft", () => {
      let currentPlayer = this.players[socket.id]
      currentPlayer.game.moveLeft()
      socket.emit("updateGame", currentPlayer.game.drawPiece())
    })
  }

  moveRight = socket => {
    socket.on("moveRight", () => {
      let currentPlayer = this.players[socket.id]
      currentPlayer.game.moveRight()
      socket.emit("updateGame", currentPlayer.game.drawPiece())
    })
  }

  moveDown = socket => {
    socket.on("moveDown", () => {
      let currentPlayer = this.players[socket.id]
      currentPlayer.game.moveDown()
      socket.emit("updateGame", currentPlayer.game.drawPiece())
    })
  }

  moveUp = socket => {
    socket.on("moveUp", () => {
      let currentPlayer = this.players[socket.id]
      currentPlayer.game.moveUp()
      socket.emit("updateGame", currentPlayer.game.drawPiece())
    })
  }

  startGame = socket => {
    socket.on("startGame", () => {
      this.updateGame(socket)
    })
  }

  updateGame = socket => {
    let currentPlayer = this.players[socket.id]
    setInterval(() => {
      currentPlayer.game.moveDown()
      socket.emit("updateGame", currentPlayer.game.drawPiece())
    }, currentPlayer.game.STEP_INTERVAL)
  }
}

export default Manager
