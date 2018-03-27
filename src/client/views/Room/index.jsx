import React from "react"

import FinalBoard from "../../containers/Board"
import FinalRoom from "../../containers/Room"

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
        <FinalRoom />
      </div>
    )
}

export default RoomView
