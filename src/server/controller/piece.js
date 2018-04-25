import { constants } from "./const"

class Piece {
  constructor(pieceName) {
    this.piece = constants[pieceName]
  }

  getArray = () => {
    return this.piece
  }

  rotate = piecePosition => {
    let result = []
    for (let i = 0; i < this.piece[0].length; i++) {
      let row = this.piece.map(e => e[i]).reverse()
      result.push(row)
    }
    if (this._pieceOutOfBoard(piecePosition)) return false
    this.piece = result
  }

  _pieceOutOfBoard = piecePosition => {
    for (let y = 0; y < this.piece.length; y++) {
      for (let x = 0; x < this.piece[y].length; x++) {
        let outOfBoardRight = x + piecePosition.x >= constants.BOARD_COLS
        let outOfBoardLeft = x + piecePosition.x < 0
        if (outOfBoardLeft || outOfBoardRight) return true
      }
    }
    return false
  }
}

export default Piece
