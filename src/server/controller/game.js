import crypto from "crypto"
import omit from 'lodash/omit'

const REMOVE_FIELDS = ["socket", "currentRoom", "id"]

class Game {
	constructor(params) {
		this.hashName = crypto.randomBytes(4).toString("hex")
		this.gameName = params.gameName
		this.io = params.io
		this.status = 0
		this.players = {}

		console.log("Game created, hash room name: ", this.hashName)
	}

	addPlayer = player => {
		if (Object.keys(this.players).length <= 3) {
			player.score = 0
			player.ready = false
			this.players[player.id] = player
			player.socket.join(this.hashName)
			this.io
				.to(this.hashName)
				.emit(
					"notification",
					`The player ${player.username} has joined the game !`
				)
			this.io
				.to(this.hashName)
				.emit(
					"userJoin",
					`The player ${player.username} has joined the game !`
				)
		} else
			player.socket.emit("fullRoom", "The room you are trying to join is full")
	}

	deletePlayer = player => {
		if (player.id in this.players) {
			delete this.players[player.id]
			this.io
				.to(this.hashName)
				.emit("notification", `The player ${player.name} has left the game !`)
			player.socket.leave(this.hashName)
		}
	}

	_to_json = () => {
		return {
			players: Object.keys(this.players).length,
			hashName: this.hashName,
			gameName: this.gameName,
			status: this.status
		}
	}
}

// let players = {}
// Object.values(this.players).forEach(player => {
// 	let finalPlayer = { ...player }
// 	players[player.id] = omit(finalPlayer, REMOVE_FIELDS)
// })

export default Game
