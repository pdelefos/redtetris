import React from "react"
import { Link } from "react-router-dom"

let RoomItem = ({ gameName, players, hashName, username, joinRoom }) => {
	return (
		<div className="room-item">
			<span> Game Name: {gameName} </span>
			<span> Number of players: {Object.keys(players).length} / 4</span>
			<Link
				className="button"
				to={`/${hashName}[${username}]`}
				onClick={() => joinRoom(hashName)}
			>
				Join
      </Link>
		</div>
	)
}

export default RoomItem
