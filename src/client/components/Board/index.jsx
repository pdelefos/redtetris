import React from "react"
import "./style.scss"

const Board = ({ game, methods }) => {
  if (!game) {
    return (
      <div>
        <button
          onClick={() => {
            methods.startGame()
          }}
          className="button"
        >
          GO
        </button>
      </div>
    )
  } else {
    return (
      <div>
        <div
          className="board"
          onKeyDown={evt => {
            handleKeyDown(methods, evt)
          }}
          tabIndex="0"
        >
          {_createGrid(game)}
        </div>
      </div>
    )
  }
}
const handleKeyDown = (methods, evt) => {
  switch (evt.key) {
    case "ArrowLeft":
      methods.moveLeft()
      break
    case "ArrowRight":
      methods.moveRight()
      break
    case "ArrowDown":
      methods.moveDown()
      break
    default:
      break
  }
}

const _createGrid = boardArray => {
  let lines = []
  boardArray.forEach((line, index) => {
    lines.push(_createLine(line, index))
  })
  return <div className="grid">{lines}</div>
}

const _createLine = (lineArray, lineIndex) => {
  let columns = []
  lineArray.forEach((cell, index) => {
    columns.push(
      <div key={lineIndex + index} className={_cellClassColor(cell)} />
    )
  })
  return (
    <div key={lineIndex} className="grid__line">
      {columns}
    </div>
  )
}

const _cellClassColor = cellValue => {
  const pieceClasses = [
    "piece",
    "piece--stick",
    "piece--square",
    "piece--pyramid",
    "piece--right-snake",
    "piece--left-snake",
    "piece--gamma",
    "piece--alpha"
  ]
  return "grid__cell " + pieceClasses[cellValue]
}

export default Board
