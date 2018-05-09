import React from "react"

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
    "piece--alpha",
    "piece--indestructible"
  ]
  return "grid__cell " + pieceClasses[cellValue]
}

export { _createGrid }
