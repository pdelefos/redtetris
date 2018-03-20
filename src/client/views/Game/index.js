import React from "react"
import Board from "../../components/Board"
import "./style.scss"

const piece = [[0, 1, 0], [1, 1, 1], [0, 0, 0]]

const Game = ({ startGame, grid }) => {
  return (
    <div>
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
