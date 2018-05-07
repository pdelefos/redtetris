import React from "react"
import "./style.scss"
import { _createGrid } from "../../utils"

const Board = ({ board, score, actions }) => {
  return (
    <div className="board-container">
      <div
        className="board"
        onKeyDown={evt => {
          handleKeyDown(actions, evt)
        }}
        tabIndex="0"
      >
        {_createGrid(board)}
      </div>
      {/* <span>Score: {score} </span> */}
    </div>
  )
}

const handleKeyDown = (actions, evt) => {
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

export default Board
