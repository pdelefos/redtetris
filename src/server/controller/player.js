import Game from "./game"
import { socket } from "../../client/socket"

class Player {
  constructor(io) {
    this.io = io
    this.players = {}
    this.games = {}
    this.currentPiece = [[0, 0, 0], [0, 1, 0], [1, 1, 1]]
    this.grid = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
    this.pos = { x: 0, y: 0 }
    this.dropCounter = 0
    this.dropInterval = 1000 // 1s

    io.on("connection", socket => {
      this.players[socket.id] = {
        username: "",
        id: socket.id,
        socket: socket,
        currentGame: null
      }
      this.initSockets(socket)
    })
  }

  initSockets = socket => {
    let methods = [
      "deletePlayer",
      "addUsername",
      "joinGame",
      "createGame",
      "fetchGames",
      "sendGrid",
      "moveLeft",
      "moveRight",
      "moveDown"
    ]

    methods.map(method => {
      this[method](socket)
    })
  }

  addUsername = socket => {
    socket.on("createUser", username => {
      this.players[socket.id].username = username
      console.log("the current player %s is now named %s", socket.id, username)
      socket.emit("notification", "The user has succesfully been created")
    })
  }

  deletePlayer = socket => {
    socket.on("disconnect", () => {
      console.log("Player %s destroyed", socket.id)
      let hashName = this.players[socket.id].currentGame
      if (hashName) {
        this.games[hashName].deletePlayer(this.players[socket.id])
      }
      delete this.players[socket.id]
    })
  }

  createGame = socket => {
    socket.on("createRoom", gameName => {
      let newGame = new Game({
        io: this.io,
        gameName: gameName
      })
      newGame.addPlayer(this.players[socket.id])
      this.games[newGame.hashName] = newGame
      this.io.sockets.emit("addRoom", newGame._to_json())
      socket.emit("forceJoinRoom", newGame.hashName)
    })
  }

  joinGame = socket => {
    socket.on("joinRoom", hashName => {
      if (hashName in this.games) {
        this.games[hashName].addPlayer(this.players[socket.id])
        this.players[socket.id].currentGame = hashName
      } else
        socket.emit(
          "notification",
          "The room you are trying to join doesnt exist"
        )
    })
  }

  leaveGame = socket => {
    socket.on("leaveRoom", hashName => {
      if (hashName in this.games) {
        this.games[hashName].deletePlayer(this.players[socket.id])
        this.players[socket.id].currentGame = null
      } else
        socket.emit(
          "notification",
          "The room you are trying to join doesnt exist"
        )
    })
  }

  fetchGames = socket => {
    socket.on("fetchRoomList", () => {
      socket.emit(
        "updateRoomList",
        Object.values(this.games).map(game => {
          console.log(game._to_json())
          return game._to_json()
        })
      )
    })
  }

  moveLeft = socket => {
    socket.on("moveLeft", () => {
      this.pos.x--
    })
  }

  moveRight = socket => {
    socket.on("moveRight", () => {
      this.pos.x++
    })
  }

  moveDown = socket => {
    socket.on("moveDown", () => {
      this.pos.y++
      this.dropCounter = 0
    })
  }

  sendGrid = socket => {
    let deltaTime = 30
    socket.on("startGame", () => {
      setInterval((time = 0) => {
        this.dropCounter += deltaTime
        if (this.dropCounter > this.dropInterval) {
          this.pos.y++
          this.dropCounter = 0
        }
        socket.emit("sendGrid", this._drawMatrix(this.currentPiece, this.pos))
      }, deltaTime)
    })
  }

  _drawMatrix = (matrix, offset) => {
    let actualGrid = JSON.parse(JSON.stringify(this.grid))
    matrix.forEach((line, lineIndex) => {
      line.forEach((cell, cellIndex) => {
        actualGrid[lineIndex + offset.y][cellIndex + offset.x] = cell
      })
    })
    return actualGrid
  }
}

export default Player
