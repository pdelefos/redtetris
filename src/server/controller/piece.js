import { constants } from "./const"

class Piece {
  constructor(shape) {
    this.currentPiece = shape
    this.pos = { x: 0, y: 0 }
  }

  getArray() {
    return this.currentPiece
  }

  resetPos() {
    this.pos = { x: 0, y: 0 }
  }

  rotate() {
    let result = []
    for (let i = 0; i < this.currentPiece[0].length; i++) {
      let row = this.currentPiece.map(e => e[i]).reverse()
      result.push(row)
    }
    this.currentPiece = result
  }
}

export default Piece
