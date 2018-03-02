import React from "react"
import "./style.css"
import FinalConnection from "../../containers/Connection"
import FinalNotification from "../../containers/NotificationList"
import Lobby from "../Lobby"

let Home = () => {
  return (
    <div>
      <FinalConnection />
      <FinalNotification />
      <Lobby />
    </div>
  )
}

export default Home
