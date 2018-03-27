import crypto from "crypto"
import omit from "lodash/omit"
import Game from "./game"

const REMOVE_FIELDS = ["currentRoom", "id"]

class Room {
  constructor(name) {
    this.hashName = crypto.randomBytes(4).toString("hex")
    this.roomName = name
    this.status = 0
    this.game = new Game()
  }

  playerCount = () => {
    return Object.keys(this.game.players).length
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
