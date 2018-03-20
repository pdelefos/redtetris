import React from "react"
import { Switch, Route } from "react-router-dom"

import ConnectionView from "../view.Connection"
import LobbyView from "../view.Lobby"

import "./style.scss"

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ConnectionView} />
        <Route path="/lobby" component={LobbyView} />
      </Switch>
    </div>
  )
}

export default App
