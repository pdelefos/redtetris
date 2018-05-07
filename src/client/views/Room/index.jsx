import React from "react"

import FinalRoom from "../../containers/Room"
import FinalHeader from "../../containers/Header"
import Game from "../Game"

const RoomView = ({ gameStatus, clearNotification }) => {
  if (gameStatus === "In game") {
    clearNotification()
    return (
      <div>
        <FinalHeader />
        <Game />
      </div>
    )
  } else
    return (
      <div>
        <FinalHeader />
        <FinalRoom />
      </div>
    )
}

export default RoomView
