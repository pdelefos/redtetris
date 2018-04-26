import React from "react"
import "./style.scss"

const Board = ({ board, score, actions }) => {
  return (
    <div>
      <div
        className="board"
        onKeyDown={evt => {
          handleKeyDown(actions, evt)
        }}
        tabIndex="0"
      >
        {_createGrid(board)}
      </div>
      <span>Score: {score} </span>
    </div>
  )
}

const handleKeyDown = (actions, evt) => {
  console.log(actions, evt.key)
  switch (evt.key) {
    case "ArrowLeft":
      actions.moveLeft()
      break
    case "ArrowRight":
      actions.moveRight()
      break
    case "ArrowDown":
      actions.moveDown()
      break
    case "ArrowUp":
      actions.moveUp()
      break
    case " ":
      actions.pushDown()
      break
    default:
      break
  }
}

const _createGrid = boardArray => {
  if (boardArray) {
    let lines = []
    boardArray.forEach((line, index) => {
      lines.push(_createLine(line, index))
    })
    return <div className="grid">{lines}</div>
  }
  return <div>Loading...</div>
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
