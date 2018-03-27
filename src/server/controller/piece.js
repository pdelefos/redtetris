class Piece {
  constructor() {
    this.STICK = [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]]
    this.SQUARE = [[2, 2, 0, 0], [2, 2, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    this.PYRAMID = [[0, 3, 0, 0], [3, 3, 3, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    this.RIGHT_SNAKE = [[0, 0, 0, 0], [0, 4, 4, 0], [4, 4, 0, 0], [0, 0, 0, 0]]
    this.LEFT_SNAKE = [[0, 0, 0, 0], [5, 5, 0, 0], [0, 5, 5, 0], [0, 0, 0, 0]]
    this.GAMMA = [[6, 0, 0, 0], [6, 6, 6, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    this.ALPHA = [[0, 0, 7, 0], [7, 7, 7, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    this.pieces = [
      this.STICK,
      this.SQUARE,
      this.PYRAMID,
      this.RIGHT_SNAKE,
      this.LEFT_SNAKE,
      this.GAMMA,
      this.ALPHA
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
