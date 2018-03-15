import React from "react"
import { Switch, Route } from "react-router-dom"

import ConnectionView from "../../views/Connection"
import Lobby from "../Lobby"
import RoomView from "../../views/Room"

import "./style.scss"

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ConnectionView} />
        <Route path="/lobby" component={Lobby} />
        <Route path="/:hashName" component={RoomView} />
      </Switch>
    </div>
  )
}

export default App
