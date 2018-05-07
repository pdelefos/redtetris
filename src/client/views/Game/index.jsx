import React from "react"
import "./style.scss"

import FinalBoard from "../../containers/Board"
import FinalShadow from "../../containers/Shadow"

const Game = () => {
  return (
    <div className="game-view">
      <div className="hud" />
      <FinalBoard />
      <FinalShadow />
    </div>
  )
}

export default Game
