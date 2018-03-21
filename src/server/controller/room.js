import crypto from "crypto"
import omit from "lodash/omit"

const REMOVE_FIELDS = ["currentRoom", "id"]

class Room {
  constructor(params) {
    this.hashName = crypto.randomBytes(4).toString("hex")
    this.roomName = params.roomName
    this.status = 0
    this.players = {}

    console.log("Room created, hash room name: ", this.hashName)
  }

  addPlayer = player => {
    if (Object.keys(this.players).length <= 3) {
      player.score = 0
      player.ready = false
      this.players[player.id] = player
    }
  }

  deletePlayer = player => {
    if (player.id in this.players) {
      delete this.players[player.id]
    }
  }

  playerCount = () => {
    return Object.keys(this.players).length
  }

  _to_json = () => {
    return {
      players: this.playerCount(),
      hashName: this.hashName,
      roomName: this.roomName,
      status: this.status
    }
  }
}

export default Room
