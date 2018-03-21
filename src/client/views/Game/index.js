import React from "react"
import Board from "../../components/Board"
import "./style.scss"
import { moveLeft } from "../../actions/user"

const Game = ({ startGame, grid, moveLeft, moveRight, moveDown }) => {
  return (
    <div
      onKeyDown={evt => {
        switch (evt.key) {
          case "ArrowLeft":
            moveLeft()
            break
          case "ArrowRight":
            moveRight()
            break
          case "ArrowDown":
            moveDown()
            break
          default:
            break
        }
      }}
      tabIndex="0"
    >
      <button
        className="button"
        onClick={() => {
          startGame()
        }}
      >
        GO
      </button>
      <Board grid={grid} />
    </div>
  )
}

export default Game
