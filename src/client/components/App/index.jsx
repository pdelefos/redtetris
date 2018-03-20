import React from "react"
import { Switch, Route } from "react-router-dom"

import ConnectionView from "../../views/Connection"
import LobbyView from "../../views/Lobby"
import RoomView from "../../views/Room"

import "./style.scss"

const App = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={ConnectionView} />
				<Route path="/lobby" component={LobbyView} />
				<Route path="/:hashName" component={RoomView} />
			</Switch>
		</div>
	)
}

export default App
