import Piece from "./piece"
class Game {
  constructor() {
    this.BOARD_COLS = 10
    this.BOARD_ROWS = 20
    this.STEP_INTERVAL = 1000 // 1s

    this.grid = this._iniGrid(this.BOARD_ROWS, this.BOARD_COLS)
    this.canMoveLeft = true
    this.canMoveRight = true
    this.pos = { x: 0, y: 0 }
    this.piece = new Piece()
  }

  _iniGrid = (nbLine, nbColumn) => {
    return Array(nbLine)
      .fill(0)
      .map(x => Array(nbColumn).fill(0))
  }

  moveLeft = (count = 1) => {
    if (this.canMoveLeft) this.pos.x -= count
    this._outOfBoard()
    this._collideWithPiece()
  }

  moveRight = (count = 1) => {
    if (this.canMoveRight) this.pos.x += count
    this._outOfBoard()
    this._collideWithPiece()
  }

  moveDown = (count = 1) => {
    this.pos.y += count
    if (this._outOfBoard()) {
      this.pos.y--
      this.grid = this.drawPiece()
      this.piece = new Piece()
      this.pos = { x: 0, y: 0 }
    }
    if (this._collideWithPiece()) {
      this.grid = this.drawPiece()
      this.piece = new Piece()
      this.pos = { x: 0, y: 0 }
    }
  }

  moveUp = () => {
    this.piece.rotate()
  }

  drawPiece = () => {
    let actualGrid = JSON.parse(JSON.stringify(this.grid))
    this.piece.getArray().forEach((line, y) => {
      line.forEach((cell, x) => {
        if (cell !== 0) {
          actualGrid[y + this.pos.y][x + this.pos.x] = cell
        }
      })
    })
    return actualGrid
  }

  _outOfBoard = () => {
    for (let y = 0; y < this.piece.getArray().length; y++) {
      for (let x = 0; x < this.piece.getArray()[y].length; x++) {
        let cell = this.piece.getArray()[y][x]
        if (cell !== 0) {
          let outOfBoardLeft = x + this.pos.x < 0
          let outOfBoardRight = x + this.pos.x >= this.BOARD_COLS
          let outOfRows = y + this.pos.y >= this.BOARD_ROWS
          if (outOfBoardLeft) this.pos.x++
          if (outOfBoardRight) this.pos.x--
          if (outOfRows) return true
        }
      }
    }
    return false
  }

  _collideWithPiece = () => {
    for (let y = 0; y < this.piece.getArray().length; y++) {
      for (let x = 0; x < this.piece.getArray()[y].length; x++) {
        let cell = this.piece.getArray()[y][x]
        if (cell !== 0) {
          let coord = { x: x + this.pos.x, y: y + this.pos.y }
          let touchPieceLeft = this.grid[coord.y][coord.x - 1] != 0
          let touchPieceRight = this.grid[coord.y][coord.x + 1] != 0
          let touchPieceBottom =
            coord.y + 1 < this.BOARD_ROWS &&
            this.grid[coord.y + 1][coord.x] != 0
          if (touchPieceLeft) this.canMoveLeft = false
          else this.canMoveLeft = true
          if (touchPieceRight) this.canMoveRight = false
          else this.canMoveRight = true
          if (touchPieceBottom) return true
        }
      }
    }
    return false
  }
}

export default Game
