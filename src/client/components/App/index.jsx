import React from "react"
import "./style.scss"
//packages
import { Switch, Route } from "react-router-dom"
//components
import ConnectionView from "../../views/Connection"
import LobbyView from "../../views/Lobby"

import FinalRoomView from "../../containers/RoomWrapper"
import FinalNotificationList from "../../containers/NotificationList"

const App = () => {
  return (
    <div>
      <FinalNotificationList />
      <Switch>
        <Route exact path="/" component={ConnectionView} />
        <Route path="/lobby" component={LobbyView} />
        <Route path="/:hashName" component={FinalRoomView} />
      </Switch>
    </div>
  )
}

export default App
