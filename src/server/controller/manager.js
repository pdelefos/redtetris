import Player from "./player"
import Room from "./room"
import Notification from "./notification"
import { constants } from "./const"
import omit from "lodash/omit"
import cloneDeep from "lodash/cloneDeep"

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
      this.players[socket.id] = new Player(socket)
      this.notification = new Notification(this.io, socket)

      this.updateUser(socket)
      this.deleteUser(socket)

      this.joinGame(socket)
      this.createRoom(socket)
      this.leaveRoom(socket)
      this.fetchRooms(socket)

      this.playerStatus(socket)

      this.moveDown(socket)
      this.moveLeft(socket)
      this.moveRight(socket)
      this.moveUp(socket)
      this.pushDown(socket)
    })
  }

  updateUser = socket => {
    socket.on("updateUser", username => {
      let oldUsername = this.players[socket.id].username
      this.players[socket.id].updateUsername(username)
      socket.emit("updateId", socket.id)
      if (!oldUsername)
        this.notification.userNotification(socket, "User succesfully created")
      else
        this.notification.userNotification(socket, "User succesfully renamed")
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
            socket,
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
          socket,
          "The room you are trying to join doesnt exist"
        )
    })
  }

  _leave = id => {
    let currentPlayer = this.players[id]
    let hashName = currentPlayer.currentRoom
    if (hashName) {
      let room = this.rooms[hashName]
      if (room.game.status === "In game") clearInterval(this.refreshId)
      room.game.removePlayer(id)

      if (room.playerCount() > 0) {
        currentPlayer.updateCurrentRoom(null)
        this.updateRoom(hashName)
        this.io.to(room.hashName).emit("deletePlayer", id)
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

  _countdown = (callback, delay, repetitions) => {
    return new Promise((resolve, reject) => {
      let count = 1
      let interval = setInterval(() => {
        callback(count)
        if (count++ === repetitions) {
          clearInterval(interval)
          resolve()
        }
      }, delay)
    })
  }

  _checkStatus = room => {
    let readyCount = Object.values(room.game.players).reduce(
      (acc, currentVal) => currentVal.ready + acc,
      0
    )
    if (readyCount == Object.keys(room.game.players).length) {
      room.game.updateStatus("Starting")
      this.io.to(room.hashName).emit("updateGame", room.game)
      Object.values(room.game.players).forEach(player => {
        player.initGame()
        this._countdown(
          count => {
            this.notification.userNotification(
              player.socket,
              `Starting in ${constants.COUNTDOWN_REPETITIONS - count}`
            )
          },
          constants.COUNTDOWN_DELAY,
          constants.COUNTDOWN_REPETITIONS
        ).then(() => {
          room.game.updateStatus("In game")
          this.io.to(room.hashName).emit("updateGame", room.game)
          this.startGame(player.socket)
          this.updateRoom(room.hashName)
        })
      })
    } else this.io.to(room.hashName).emit("updateGame", room.game)
  }

  playerStatus = socket => {
    socket.on("playerStatus", () => {
      let player = this.players[socket.id]
      let hashName = player.currentRoom
      if (hashName && hashName in this.rooms) {
        let room = this.rooms[hashName]
        player.updateStatus()
        this._checkStatus(room)
      }
    })
  }

  fetchRooms = socket => {
    socket.on("fetchRoomList", () => {
      socket.emit("updateRoomList", Object.values(this.rooms).map(game => game))
    })
  }

  // GAME LOGIC

  moveLeft = socket => {
    socket.on("moveLeft", () => {
      let currentPlayer = this.players[socket.id]
      if (!currentPlayer.lock && !currentPlayer.done) {
        currentPlayer.lock = !currentPlayer.lock
        if (
          !this.handleActions(
            socket,
            currentPlayer,
            currentPlayer.board.moveLeft
          )
        )
          return
        socket.emit("updateBoard", {
          board: currentPlayer.board.drawPiece(),
          id: socket.id
        })
        currentPlayer.lock = !currentPlayer.lock
      }
    })
  }

  moveRight = socket => {
    socket.on("moveRight", () => {
      let currentPlayer = this.players[socket.id]
      if (!currentPlayer.lock && !currentPlayer.done) {
        currentPlayer.lock = !currentPlayer.lock
        if (
          !this.handleActions(
            socket,
            currentPlayer,
            currentPlayer.board.moveRight
          )
        )
          return
        socket.emit("updateBoard", {
          board: currentPlayer.board.drawPiece(),
          id: socket.id
        })
        currentPlayer.lock = !currentPlayer.lock
      }
    })
  }

  moveDown = socket => {
    socket.on("moveDown", () => {
      let currentPlayer = this.players[socket.id]
      if (!currentPlayer.lock && !currentPlayer.done) {
        currentPlayer.lock = !currentPlayer.lock
        if (
          !this.handleActions(socket, currentPlayer, currentPlayer.board.drop)
        )
          return
        socket.emit("updateBoard", {
          board: currentPlayer.board.drawPiece(),
          id: socket.id
        })
        currentPlayer.lock = !currentPlayer.lock
      }
    })
  }

  moveUp = socket => {
    socket.on("moveUp", () => {
      let currentPlayer = this.players[socket.id]
      if (!currentPlayer.lock && !currentPlayer.done) {
        currentPlayer.lock = !currentPlayer.lock
        if (
          !this.handleActions(socket, currentPlayer, currentPlayer.board.moveUp)
        )
          return
        socket.emit("updateBoard", {
          board: currentPlayer.board.drawPiece(),
          id: socket.id
        })
        currentPlayer.lock = !currentPlayer.lock
      }
    })
  }

  pushDown = socket => {
    socket.on("pushDown", () => {
      let currentPlayer = this.players[socket.id]
      if (!currentPlayer.lock && !currentPlayer.done) {
        currentPlayer.lock = !currentPlayer.lock
        if (
          !this.handleActions(
            socket,
            currentPlayer,
            currentPlayer.board.pushDown
          )
        )
          return
        socket.emit("updateBoard", {
          board: currentPlayer.board.drawPiece(),
          id: socket.id
        })
        currentPlayer.lock = !currentPlayer.lock
      }
    })
  }

  handleActions = (socket, currentPlayer, action) => {
    let game = this.rooms[currentPlayer.currentRoom].game
    if (currentPlayer.board) {
      let res = action()
      if (res.handleReturn) {
        currentPlayer.board.currentPiece = currentPlayer.board.nextPiece
        currentPlayer.board._setDefaultPosition()
        if (currentPlayer.board._collide()) {
          clearInterval(this.refreshId)
          game.done++
          currentPlayer.done = true
          if (game.done == Object.keys(game.players).length) {
            game.players[currentPlayer.id].updateTotalScore(
              currentPlayer.board.score
            )
            game.reset()
            this.io.to(currentPlayer.currentRoom).emit("updateGame", game)
          }
          return false
        }
        currentPlayer.board.nextPiece = game.getNextPiece(socket.id)
      }
      this._triggerMalus(socket.id, res.nbLineCompleted)
      this._updateGameInfo(socket, currentPlayer)
    }
    return true
  }

  startGame = socket => {
    let currentPlayer = this.players[socket.id]
    let game = this.rooms[currentPlayer.currentRoom].game
    game.generatePiecesArray()
    currentPlayer.board.currentPiece = game.getNextPiece(socket.id)
    currentPlayer.board._setDefaultPosition()
    currentPlayer.board.nextPiece = game.getNextPiece(socket.id)
    this.refreshId = setInterval(() => {
      if (!currentPlayer.lock && !currentPlayer.done) {
        currentPlayer.lock = !currentPlayer.lock
        if (
          !this.handleActions(socket, currentPlayer, currentPlayer.board.drop)
        )
          return
        this.io.to(game.hashName).emit("updateBoard", {
          board: currentPlayer.board.drawPiece(),
          id: socket.id
        })
        currentPlayer.lock = !currentPlayer.lock
      }
    }, constants.STEP_INTERVAL)
  }

  _updateGameInfo = (socket, currentPlayer) => {
    socket.emit("updateGameInfo", {
      id: currentPlayer.id,
      nextPiece: currentPlayer.board.nextPiece.getArray(),
      score: currentPlayer.board.score,
      lineCompleted: currentPlayer.board.lineCount
    })
  }

  _triggerMalus = (id, nbLineCompleted) => {
    let currentPlayer = this.players[id]
    if (nbLineCompleted > 1) {
      let players = cloneDeep(
        omit(this.rooms[currentPlayer.currentRoom].game.players, id)
      )
      for (let player in players) {
        if (players.hasOwnProperty(player)) {
          players[player].board.insertIndesctructibleLine(nbLineCompleted - 1)
        }
      }
    }
  }
}

export default Manager
