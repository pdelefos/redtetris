import React from "react"

import FinalBoard from "../../containers/Board"
import FinalRoom from "../../containers/Room"
import FinalHeader from "../../containers/Header"

const RoomView = ({ gameStatus, clearNotification }) => {
  if (gameStatus === "In game") {
    clearNotification()
    return (
      <div>
        <FinalBoard />
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
