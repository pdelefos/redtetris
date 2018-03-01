import React from "react"
import "./style.css"
import Connection from "../../containers/Connection"
import NotificationList from "../../containers/NotificationList"
import Lobby from "../Lobby"

let Home = () => {
  return (
    <div>
      <Connection />
      <NotificationList />
      <Lobby />
    </div>
  )
}

export default Home
