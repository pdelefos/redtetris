import React from "react"
import "./style.css"
import FinalConnection from "../../containers/Connection"
import FinalNotification from "../../containers/NotificationList"
import GameList from "../GameList"

let Home = () => {
  return (
    <div>
      <FinalConnection />
      <FinalNotification />
      <GameList />
    </div>
  )
}

export default Home
