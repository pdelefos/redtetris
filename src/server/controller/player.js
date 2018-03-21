class Player {
  constructor(id) {
    this.username = ""
    this.id = id
    this.currentRoom = null
  }

  addUsername = username => {
    this.username = username
  }

  joinRoom = hashName => {
    this.currentRoom = hashName
  }

  leaveRoom = () => {
    this.currentRoom = null
  }
}

export default Player
