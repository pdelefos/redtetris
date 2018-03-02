import React from "react"
import { Switch, Route } from "react-router-dom"
import FinalConnection from "../../containers/Connection"
import Lobby from "../Lobby"
import Home from "../Home"

import "./style.css"

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={FinalConnection} />
        <Route path="/lobby" component={Lobby} />
      </Switch>
    </div>
  )
}

export default App
