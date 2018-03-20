import Game from "./game"

class Player {

	constructor(socket) {
		this.username = ""
		this.id = socket.id
		this.socket = socket
		this.currentRoom = null

		let methods = [
			"deletePlayer",
			"addUsername",
			"joinGame",
			"createGame",
			"fetchGames"
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
			this._leave(socket.id)
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
			this.players[socket.id].currentRoom = newGame.hashName
			this.io.sockets.emit("addRoom", newGame._to_json())
			socket.emit("forceJoinRoom", newGame.hashName)
		})
	}

	joinGame = socket => {
		socket.on("joinRoom", hashName => {
			if (hashName in this.games) {
				this.games[hashName].addPlayer(this.players[socket.id])
				this.players[socket.id].currentRoom = hashName
				this.updateGame(hashName)
			} else
				socket.emit(
					"notification",
					"The room you are trying to join doesnt exist"
				)
		})
	}

	_leave = (id) => {
		let hashName = this.players[id].currentRoom
		if (hashName && hashName in this.games) {
			this.games[hashName].deletePlayer(this.players[id])
			if (Object.keys(this.games[hashName].players).length != 0) {
				this.players[id].currentRoom = null
				this.updateGame(hashName)
			}
			else {
				delete this.games[hashName]
				this.io.sockets.emit('deleteRoom', hashName)
			}
		}
	}

	leaveRoom = socket => {
		socket.on("leaveRoom", () => {
			this._leave(socket.id)
		})
	}

	updateGameList = socket => {
		socket.emit(
			"updateRoomList",
			Object.values(this.games).map(game => {
				console.log(game._to_json())
				return game._to_json()
			})
		)
	}

	updateGame = hashName => {
		this.io.sockets.emit(
			"updateRoom", this.games[hashName]._to_json()
		)
	}

	fetchGames = socket => {
		socket.on("fetchRoomList", () => {
			this.updateGameList(socket)
		})
	}

}

export default Player