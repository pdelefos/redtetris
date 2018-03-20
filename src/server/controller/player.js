import Game from "./game"

class Player {
  constructor(io) {
    this.io = io
    this.players = {}
    this.games = {}
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
    this.i = 0
    this.j = 0

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
      "sendGrid"
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

  sendGrid = socket => {
    socket.on("startGame", () => {
      setInterval(() => {
        socket.emit("sendGrid", this.grid)
        this.grid[this.j][this.i] = Math.floor(Math.random() * 7) + 1
        // if (this.i < 10) {
        //   this.i++
        //   if (this.i === 10) {
        //     this.j++
        //     this.i = 0
        //   }
        //   if (this.j === 20) {
        //     this.j = 0
        //     this.i = 0
        //   }
        // }
      }, 500)
    })
  }
}

export default Player
