import Game from "./game"

class Player {
  constructor(io) {
    this.io = io
    this.players = {}
    this.games = {}

    io.on("connection", socket => {
      this.players[socket.id] = {
        username: "",
        id: socket.id,
        socket: socket,
        inGame: null
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
      "toto"
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
      let hashName = this.players[socket.id].inGame
      if (hashName) {
        this.games[hashName].deletePlayer(this.players[socket.id])
      }
      delete this.players[socket.id]
    })
  }

  createGame = socket => {
    socket.on("createGame", gameName => {
      let newGame = new Game({
        io: this.io,
        gameName: gameName
      })
      newGame.addPlayer(this.players[socket.id])
      this.games[newGame.hashName] = newGame
      this.io.sockets.emit("addGame", newGame._to_json())
    })
  }

  joinGame = socket => {
    socket.on("joinGame", hashName => {
      if (hashName in this.games) {
        this.games[hashName].addPlayer(this.players[socket.id])
        this.players[socket.id].inGame = hashName
      } else
        socket.emit(
          "notification",
          "The room you are trying to join doesnt exist"
        )
    })
  }

  leaveGame = socket => {
    socket.on("leaveGame", hashName => {
      if (hashName in this.games) {
        this.games[hashName].deletePlayer(this.players[socket.id])
        this.players[socket.id].inGame = null
      } else
        socket.emit(
          "notification",
          "The room you are trying to join doesnt exist"
        )
    })
  }

  fetchGames = socket => {
    socket.on("fetchGameList", () => {
      socket.emit(
        "updateGameList",
        Object.values(this.games).map(game => {
          console.log(game._to_json())
          return game._to_json()
        })
      )
    })
  }
}

export default Player
