import Player from "./player"
import Room from "./room"
import Notification from "./notification"
import { currentId } from "async_hooks"

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
      this.updateGame(socket)
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
      // this.pos.x--
    })
  }

  moveRight = socket => {
    socket.on("moveRight", () => {
      // this.pos.x++
    })
  }

  moveDown = socket => {
    socket.on("moveDown", () => {
      // this.pos.y++
      // this.dropCounter = 0
    })
  }

  updateGame = socket => {
    // let deltaTime = 1000
    let currentPlayer = this.players[socket.id]
    socket.on("startGame", () => {
      setInterval(() => {
        this.dropCounter += deltaTime
        if (this.dropCounter > this.dropInterval) {
          this.pos.y++
          this.dropCounter = 0
        }
        socket.emit("updateGame", this.drawPiece(this.currentPiece, this.pos))
      }, currentPlayer.board.STEP_INTERVAL)
    })
  }
}

export default Manager
