import { constants } from "./const"

class Piece {
  constructor() {
    this.pieces = [
      constants.STICK,
      constants.SQUARE,
      constants.PYRAMID,
      constants.RIGHT_SNAKE,
      constants.LEFT_SNAKE,
      constants.GAMMA,
      constants.ALPHA
    ]
    this.currentPiece = this.pieces[
      this._getRandomArbitrary(0, this.pieces.length)
    ]
  }

  getArray() {
    return this.currentPiece
  }

  rotate() {
    let result = []
    for (let i = 0; i < this.currentPiece[0].length; i++) {
      let row = this.currentPiece.map(e => e[i]).reverse()
      result.push(row)
    }
    this.currentPiece = result
  }

  _getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }
}

export default Piece
