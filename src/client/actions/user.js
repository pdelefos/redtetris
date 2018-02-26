import { socket } from '../socket'

function createUser(username, socketId) {
	socket.emit('createUser', username)
  return {
		type: 'CREATE_USER',
		username,
		socketId
  }
}

export { createUser }