import React from "react"
import { Switch, Route } from "react-router-dom"

import ConnectionView from "../view.Connection"
import Lobby from "../Lobby"

import "./style.scss"

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ConnectionView} />
        <Route path="/lobby" component={Lobby} />
      </Switch>
    </div>
  )
}

export default App
