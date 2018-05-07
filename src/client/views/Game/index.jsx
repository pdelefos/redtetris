import React from "react"
import "./style.scss"

import FinalBoard from "../../containers/Board"
import FinalShadow from "../../containers/Shadow"
import Hud from "../../components/Hud"

const Game = () => {
  return (
    <div className="game-view">
      <Hud />
      <FinalBoard />
      <FinalShadow />
    </div>
  )
}

export default Game
