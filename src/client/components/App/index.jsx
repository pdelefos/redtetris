import React from "react"
import "./style.scss"
//packages
import { Switch, Route } from "react-router-dom"
//components
import ConnectionView from "../../views/Connection"
import LobbyView from "../../views/Lobby"
import RoomView from "../../views/Room"
import GameView from "../../views/Game"
import FinalNotificationList from "../../containers/NotificationList"

const App = () => {
  return (
    <div>
      <FinalNotificationList />
      <Switch>
        <Route exact path="/" component={ConnectionView} />
        <Route path="/lobby" component={LobbyView} />
        <Route path="/game" component={GameView} />
        <Route path="/:hashName" component={RoomView} />
      </Switch>
    </div>
  )
}

export default App
