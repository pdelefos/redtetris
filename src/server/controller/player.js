class Player {
  constructor(id) {
    this.username = null
    this.currentRoom = null
    this.id = id
  }

  updateUsername = username => {
    this.username = username
  }

  joinGame = () => {
    this.game = Game()
  }

  updateCurrentRoom = hashName => {
    this.currentRoom = hashName
  }
}

export default Player
