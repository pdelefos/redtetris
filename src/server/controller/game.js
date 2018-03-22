class Game {
  constructor() {
    this.BOARD_COLS = 10
    this.BOARD_ROWS = 20
    this.STEP_INTERVAL = 1000

    this.grid = this._iniGrid(this.BOARD_ROWS, this.BOARD_COLS)
    this.pos = { x: 0, y: 0 }
    this.piece = [[0, 0, 0], [0, 1, 0], [1, 1, 1]]
  }

  _iniGrid = (nbLine, nbColumn) => {
    return Array(nbLine)
      .fill(0)
      .map(x => Array(nbColumn).fill(0))
  }

  moveLeft = (count = 1) => {
    this.pos.x -= count
  }

  moveRight = (count = 1) => {
    this.pos.x += count
  }

  moveDown = (count = 1) => {
    this.pos.y += count
    // if (this._collide()) {
    //   this._merge()
    //   this.pos.y = 0
    // }
  }

  moveUp = () => {
    this.piece = this._rotateMatrix(this.piece)
  }

  drawPiece = () => {
    let actualGrid = JSON.parse(JSON.stringify(this.grid))
    this.piece.forEach((line, y) => {
      line.forEach((cell, x) => {
        if (cell !== 0) {
          actualGrid[y + this.pos.y][x + this.pos.x] = cell
        }
      })
    })
    return actualGrid
  }

  _outOfBoard = () => {
    this.piece.forEach((line, y) => {
      line.forEach((cell, x) => {
        if (cell !== 0) {
          this.grid[y + this.pos.y]
        }
      })
    })
  }

  // _collide = () => {
  //   this.piece.forEach((line, y) => {
  //     line.forEach((cell, x) => {
  //       let outOfBoard =
  //         y + this.pos.y >= this.BOARD_ROWS || x + this.pos.x >= this.BOARD_COLS
  //       if (outOfBoard || this.grid[y + this.pos.y][x + this.pos.x] !== 0)
  //         return true
  //     })
  //   })
  //   return false
  // }
}

export default Game
