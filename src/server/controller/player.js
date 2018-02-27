import { Game } from './game'


class Player {

    constructor (socket) {
			this.socket = socket
			this.username = ""
			this.addUsername()
			console.log("Created player %s", socket.id)
		}

		addUsername = () => {
			this.socket.on('createUser', (username) => {
				this.username = username
				console.log("the current player %s is now named %s", this.socket.id, username)
				this.socket.emit('notification', 'The user has succesfully been created')
			})
		}

		// createGame = () => {
		// 	this.socket.on('createGame', (socket) => {
		// 		console.log('je rentre danscreate game')
		// 		newGame = new Game(this.players[socket.id])
		// 		this.rooms.push(newGame)
		// 	})
		// }

		
}

export { Player }