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

      this.createUser(socket)
      this.deleteUser(socket)

      this.joinRoom(socket)
      this.createRoom(socket)
      this.leaveRoom(socket)
      this.fetchRooms(socket)

      this.moveLeft(socket)
      this.moveRight(socket)
      this.moveDown(socket)
      this.startGame(socket)
    })
  }

  createUser = socket => {
    socket.on("createUser", username => {
      this.players[socket.id].addUsername(username)
      console.log("the current player %s is now named %s", socket.id, username)
      this.notification.userNotification(
        "The user has succesfully been created"
      )
    })
  }

  deleteUser = socket => {
    socket.on("disconnect", () => {
      console.log("Player %s destroyed", socket.id)
      this._leave(socket.id)
      delete this.players[socket.id]
    })
  }

  _join = (player, room) => {
    room.addPlayer(player)
    player.joinRoom(room.hashName)
    this.notification.gameNotification(
      room.hashName,
      `The player ${player.username} has joined the game !`
    )
  }

  createRoom = socket => {
    socket.on("createRoom", roomName => {
      let currentPlayer = this.players[socket.id]
      let newRoom = new Room({
        io: this.io,
        roomName: roomName
      })
      socket.join(newRoom.hashName)
      this._join(currentPlayer, newRoom)

      this.rooms[newRoom.hashName] = newRoom
      this.io.sockets.emit("addRoom", newRoom._to_json())
      socket.emit("forceJoinRoom", newRoom.hashName)
    })
  }

  joinRoom = socket => {
    socket.on("joinRoom", hashName => {
      let currentPlayer = this.players[socket.id]
      if (hashName in this.rooms) {
        if (this.rooms[hashName].playerCount() == 4) socket.emit("notification")
        else {
          socket.join(this.rooms[hashName].hashName)
          this._join(currentPlayer, this.rooms[hashName])
          this.updateRoom(hashName)
        }
      } else
        this.notification.userNotification(
          "The room you are trying to join doesnt exist"
        )
    })
  }

  _leave = id => {
    let hashName = this.players[id].currentRoom
    if (hashName) {
      let room = this.rooms[hashName]
      room.deletePlayer(this.players[id])
      if (room.playerCount() > 0) {
        this.players[id].leaveRoom()
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
    this.io.sockets.emit("updateRoom", this.rooms[hashName]._to_json())
  }

  fetchRooms = socket => {
    socket.on("fetchRoomList", () => {
      socket.emit(
        "updateRoomList",
        Object.values(this.rooms).map(game => game._to_json())
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
