import React from "react"
import { Switch, Route } from "react-router-dom"

import ConnectionView from "../../views/Connection"
import LobbyView from "../../views/Lobby"
import Game from "../../views/Game"

import "./style.scss"

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ConnectionView} />
        <Route path="/lobby" component={LobbyView} />
        <Route path="/game" component={Game} />
        <Route path="" component={() => <div>404</div>} />
      </Switch>
    </div>
  )
}

export default App
