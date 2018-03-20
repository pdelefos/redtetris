import Player from './player'

class Manager {
	constructor(io) {
		this.io = io
		this.players = {}
		this.games = {}

		io.on("connection", socket => {
			this.players[socket.id] = new Player(socket)
		})
	}
}

export default Manager
