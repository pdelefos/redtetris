import React from "react"
import { Redirect } from "react-router"

let roomName = null

const Lobby = props => {
	if (!props.currentGame)
		return (
			<div>
				<input type="text" ref={input => (roomName = input)} />
				<button
					className="button"
					onClick={() => {
						props.createRoom(roomName.value)
					}}
				>
					Create a room
        </button>
			</div>
		)
	else
		return (
			<div>
				<Redirect to={`/${props.currentGame}[${props.username}]`} />
			</div>
		)
}

export default Lobby
