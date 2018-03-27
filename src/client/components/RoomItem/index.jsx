import React from "react"
import "./style.scss"

import { Link } from "react-router-dom"

let RoomItem = ({
  roomName,
  players,
  hashName,
  username,
  status,
  joinGame
}) => {
  return (
    <div className="room-item">
      <span className="room-item__game-name">{roomName}</span>
      <span className="room-item__game-status">
        {status === 0 ? "About to start" : "In Game"}
      </span>
      <span className="room-item__player-count">{players} / 4</span>
      <span className="room-item__action">
        <Link
          className="button"
          to={`/${hashName}[${username}]`}
          onClick={() => joinGame(hashName)}
        >
          Join
        </Link>
      </span>
    </div>
  )
}

export default RoomItem
