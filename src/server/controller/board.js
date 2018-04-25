import { constants } from "./const"
import Piece from "./piece"

class Board {
  constructor() {
    this.grid = this._initGrid(constants.BOARD_ROWS, constants.BOARD_COLS)
    this.canMoveLeft = true
    this.canMoveRight = true
    this.pieces = [
      constants.STICK,
      constants.SQUARE,
      constants.PYRAMID,
      constants.RIGHT_SNAKE,
      constants.LEFT_SNAKE,
      constants.GAMMA,
      constants.ALPHA
    ]
    this.currentPiece = new Piece(this._getRandomPiece())
  }

  _initGrid = (nbLine, nbColumn) => {
    return Array(nbLine)
      .fill(0)
      .map(x => Array(nbColumn).fill(0))
  }

  _collideWithPiece = () => {
    for (let y = 0; y < this.currentPiece.getArray().length; y++) {
      for (let x = 0; x < this.currentPiece.getArray()[y].length; x++) {
        let cell = this.currentPiece.getArray()[y][x]
        if (cell !== 0) {
          let coord = {
            x: x + this.currentPiece.pos.x,
            y: y + this.currentPiece.pos.y
          }
          let touchPieceLeft = this.grid[coord.y][coord.x - 1] != 0
          let touchPieceRight = this.grid[coord.y][coord.x + 1] != 0
          let touchPieceBottom =
            coord.y + 1 < constants.BOARD_ROWS &&
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

  _outOfBoard = () => {
    for (let y = 0; y < this.currentPiece.getArray().length; y++) {
      for (let x = 0; x < this.currentPiece.getArray()[y].length; x++) {
        let cell = this.currentPiece.getArray()[y][x]
        if (cell !== 0) {
          let outOfBoardLeft = x + this.currentPiece.pos.x < 0
          let outOfBoardRight =
            x + this.currentPiece.pos.x >= constants.BOARD_COLS
          let outOfRows =
            y + this.currentPiece.pos.y >= constants.BOARD_ROWS
          if (outOfBoardLeft) this.currentPiece.pos.x++
          if (outOfBoardRight) this.currentPiece.pos.x--
          if (outOfRows) return true
        }
      }
    }
    return false
  }

  _getRandomPiece() {
    return this.pieces[Math.floor(Math.random() * this.pieces.length)]
  }

  moveLeft = (count = 1) => {
    if (this.canMoveLeft) this.currentPiece.pos.x -= count
    this._outOfBoard()
    this._collideWithPiece()
  }

  moveRight = (count = 1) => {
    if (this.canMoveRight) this.currentPiece.pos.x += count
    this._outOfBoard()
    this._collideWithPiece()
  }

  moveDown = (count = 1) => {
    this.currentPiece.pos.y += count
    if (this._outOfBoard()) {
      this.currentPiece.pos.y--
      this.grid = this.drawPiece()
      this.currentPiece = new Piece(this._getRandomPiece())
      this.currentPiece.resetPos()
    }
    if (this._collideWithPiece()) {
      this.grid = this.drawPiece()
      this.currentPiece = new Piece(this._getRandomPiece())
      this.currentPiece.resetPos()
    }
  }

  moveUp = () => {
    this.currentPiece.rotate()
  }

  drawPiece = () => {
    let actualGrid = JSON.parse(JSON.stringify(this.grid))
    this.currentPiece.getArray().forEach((line, y) => {
      line.forEach((cell, x) => {
        if (cell !== 0)
          actualGrid[y + this.currentPiece.pos.y][
            x + this.currentPiece.pos.x
          ] = cell
      })
    })
    return actualGrid
  }
}

export default Board
