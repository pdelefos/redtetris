import { Player } from './player'

class Manager {

  constructor (io) {
		this.io = io
		this.players = []
		this.rooms = []

		this.addPlayer()
	}
	
	deletePlayer(socket) {
		socket.on('disconnect', () => {
			console.log('Player %s destroyed', socket.id)
			this.players[socket.id] = null
		})
	}

	addPlayer = () => {
		this.io.on('connection', (socket) => {
			this.players[socket.id] = new Player(socket)
			this.deletePlayer(socket)
		})
	}

}

export { Manager }