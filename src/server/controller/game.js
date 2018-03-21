class Game {
  constructor() {
    this.STEP_INTERVAL = 1000
    this.position = { x: 0, y: 0 }
    this.board = []
    this.dropCounter = 0
    // this.dropInterval = 1000 // 1s
  }

  _drawPiece = (matrix, offset) => {
    let actualGrid = JSON.parse(JSON.stringify(this.grid))
    matrix.forEach((line, lineIndex) => {
      line.forEach((cell, cellIndex) => {
        actualGrid[lineIndex + offset.y][cellIndex + offset.x] = cell
      })
    })
    return actualGrid
  }
}

export default Game
