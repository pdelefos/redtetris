import { constants } from "./const"
import Piece from "./piece"

class Board {
  constructor() {
    this.grid = this._iniGrid(constants.BOARD_ROWS, constants.BOARD_COLS)
    this.lineCount = 0
    this.endOfGame = false
    this.canMoveLeft = true
    this.canMoveRight = true
    this.pos = { x: 0, y: 0 }
    this.pieces = []
    this.currentPiece = null
    this.nextPiece = null
    this._getNextPiece()
    this._setDefaultPosition()
  }

  // private methods
  _iniGrid = (nbLine, nbColumn) => {
    return Array(nbLine)
      .fill(0)
      .map(x => Array(nbColumn).fill(0))
  }

  _getNextPiece = () => {
    if (this.pieces.length == 0) this._generatePiecesArray()
    if (!this.nextPiece) this.nextPiece = this._getRandomPiece()
    this.currentPiece = this.nextPiece
    this.nextPiece = this._getRandomPiece()
  }

  _generatePiecesArray = () => {
    let piecesName = [
      "STICK",
      "SQUARE",
      "PYRAMID",
      "RIGHT_SNAKE",
      "LEFT_SNAKE",
      "GAMMA",
      "ALPHA"
    ]
    piecesName.map(pieceName => {
      for (let i = 0; i < 4; i++) this.pieces.push(new Piece(pieceName))
    })
  }

  _getRandomPiece = () => {
    return this.pieces.splice(
      this._getValueBetween(0, this.pieces.length),
      1
    )[0]
  }

  _handleCollisions = () => {
    for (let y = 0; y < this.currentPiece.getArray().length; y++) {
      for (let x = 0; x < this.currentPiece.getArray()[y].length; x++) {
        let cell = this.currentPiece.getArray()[y][x]
        if (cell !== 0) {
          let coord = { x: x + this.pos.x, y: y + this.pos.y }

          let outOfBoardBottom = coord.y >= constants.BOARD_ROWS
          let touchPieceBottom =
            coord.y < constants.BOARD_ROWS && this.grid[coord.y][coord.x] != 0

          if (touchPieceBottom) {
            this.pos.y--
            this._dropAndDrawPiece()
            return false
          }
          if (outOfBoardBottom) {
            this.pos.y--
            this._dropAndDrawPiece()
            return false
          }
        }
      }
    }
    return true
  }

  pushDown = () => {
    while (
      this._handleCollisions() &&
      this._handlePieceMovement() &&
      this._handleLineCompletion()
    )
      this.pos.y += 1
  }

  _dropAndDrawPiece = () => {
    this.grid = this.drawPiece()
    this._getNextPiece()
    this._setDefaultPosition()
    if (this._collide())
      this.grid = this._iniGrid(constants.BOARD_ROWS, constants.BOARD_COLS)
  }

  _collide = () => {
    for (let y = 0; y < this.currentPiece.getArray().length; y++) {
      for (let x = 0; x < this.currentPiece.getArray()[y].length; x++) {
        let cell = this.currentPiece.getArray()[y][x]
        if (cell !== 0) {
          let coord = { x: x + this.pos.x, y: y + this.pos.y }
          if (this.grid[coord.y][coord.x] != 0) return true
        }
      }
    }
    return false
  }

  _setDefaultPosition = () => {
    this.pos = {
      x:
        ((this.grid[0].length / 2) | 0) -
        ((this.currentPiece.getArray()[0].length / 2) | 0),
      y: 0
    }
  }

  _handlePieceMovement = () => {
    for (let y = 0; y < this.currentPiece.getArray().length; y++) {
      for (let x = 0; x < this.currentPiece.getArray()[y].length; x++) {
        let cell = this.currentPiece.getArray()[y][x]
        if (cell !== 0) {
          let coord = { x: x + this.pos.x, y: y + this.pos.y }
          let outOfBoardLeft = coord.x < 0
          let outOfBoardRight = coord.x >= constants.BOARD_COLS

          let touchPieceLeft = this.grid[coord.y][coord.x - 1] != 0
          let touchPieceRight = this.grid[coord.y][coord.x + 1] != 0

          if (outOfBoardLeft || touchPieceLeft) {
            this.canMoveLeft = false
            return false
          } else this.canMoveLeft = true
          if (outOfBoardRight || touchPieceRight) {
            this.canMoveRight = false
            return false
          } else this.canMoveRight = true
        }
      }
    }
    return true
  }

  _getValueBetween = (min, max) => Math.floor(Math.random() * (max - min) + min)

  _handleLineCompletion = () => {
    this.grid.forEach((line, index) => {
      if (this._lineIsFull(line)) {
        this._eraseLine(index)
        this.lineCount++
      }
    })
  }

  _eraseLine = lineIndex => {
    this.grid.splice(lineIndex, 1)
    this.grid.unshift(Array(constants.BOARD_COLS).fill(0))
  }

  _lineIsFull = line => {
    for (let i = 0; i < line.length; i++) if (line[i] == 0) return false
    return true
  }

  _handleEndOfGame = () =>
    this.grid[0].some(val => val !== 0)
      ? (this.endOfGame = true)
      : (this.endOfGame = false)

  // public methods

  moveLeft = (count = 1) => {
    this._handleCollisions()
    this._handlePieceMovement()
    if (this.canMoveLeft) this.pos.x -= count
  }

  moveRight = (count = 1) => {
    this._handleCollisions()
    this._handlePieceMovement()
    if (this.canMoveRight) this.pos.x += count
  }

  drop = (count = 1) => {
    this.pos.y += count
    this._handleCollisions()
    this._handlePieceMovement()
    this._handleLineCompletion()
  }

  moveUp = () => {
    this.currentPiece.rotate(this.pos)
  }

  drawPiece = () => {
    let actualGrid = JSON.parse(JSON.stringify(this.grid))
    this.currentPiece.getArray().forEach((line, y) => {
      line.forEach((cell, x) => {
        if (
          cell !== 0 &&
          y + this.pos.y < constants.BOARD_ROWS &&
          x + this.pos.x < constants.BOARD_COLS
        ) {
          actualGrid[y + this.pos.y][x + this.pos.x] = cell
        }
      })
    })
    console.log(actualGrid)
    console.log()
    return actualGrid
  }
}

export default Board
