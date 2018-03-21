class Game {
  constructor() {
    this.STEP_INTERVAL = 1000
    this.grid = this._iniGrid(20, 10)
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
  }

  drawPiece = () => {
    let actualGrid = JSON.parse(JSON.stringify(this.grid))
    this.piece.forEach((line, lineIndex) => {
      line.forEach((cell, cellIndex) => {
        actualGrid[lineIndex + this.pos.y][cellIndex + this.pos.x] = cell
      })
    })
    return actualGrid
  }
}

export default Game
