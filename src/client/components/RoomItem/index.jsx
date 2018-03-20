import React from "react"
import "./style.scss"

import { Link } from "react-router-dom"

let RoomItem = ({ gameName, players, hashName, username, joinRoom }) => {
  return (
    <div className="room-item">
      <span className="room-item__game-name">{gameName}</span>
      <span className="room-item__game-status">In Game</span>
      <span className="room-item__player-count">
        {Object.keys(players).length} / 4
      </span>
      <span className="room-item__action">
        <Link
          className="button"
          to={`/${hashName}[${username}]`}
          onClick={() => joinRoom(hashName)}
        >
          Join
        </Link>
      </span>
    </div>
  )
}

export default RoomItem
