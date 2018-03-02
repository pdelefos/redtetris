import Game from "./game"

class Player {
  constructor(io) {
    this.io = io
    this.players = {}
    this.games = []
    this.addPlayer()
  }

  addPlayer = () => {
    this.io.on("connection", socket => {
      this.players[socket.id] = {
        username: ""
      }
      this.deletePlayer(socket)
      this.addUsername(socket)
      this.joinGame(socket)
      this.createGame(socket)
      this.fetchGames(socket)
    })
  }

  addUsername = socket => {
    socket.on("createUser", username => {
      this.players[socket.id].username = username
      console.log("the current player %s is now named %s", socket.id, username)
      socket.emit("notification", "The user has succesfully been created")
    })
  }

  joinGame = socket => {
    socket.on("joinGame", hashName => {
      if (this.players.length <= 3) {
        this.players.push(socket.id)
        socket.join(this.hashName)
      } else socket.emit("fullRoom", "The room you are trying to join is full")
    })
  }

  deletePlayer = socket => {
    socket.on("disconnect", () => {
      console.log("Player %s destroyed", socket.id)
      this.players[socket.id] = null
    })
  }

  createGame = socket => {
    socket.on("createGame", () => {
      let newGame = new Game(socket)
      this.games.push(newGame)
    })
  }

  fetchGames = socket => {
    socket.on("fetchGames", () => {
      socket.emit(
        "resultFetchGames",
        this.games.map(game => {
          return game._to_json()
        })
      )
    })
  }
}

export { Player }
