import React from "react"
import "./style.scss"

const shadow = false

const Board = ({ grid }) => <div className="board">{_createGrid(grid)}</div>

const _createGrid = boardArray => {
  let lines = []
  boardArray.forEach(line => {
    lines.push(_createLine(line))
  })
  return <div className="grid">{lines}</div>
}

const _createLine = lineArray => {
  let columns = []
  lineArray.forEach(cell => {
    columns.push(<div className={_cellClassColor(cell)} />)
  })
  return <div className="grid__line">{columns}</div>
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