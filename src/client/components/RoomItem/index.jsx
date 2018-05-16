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
  let button =
    status === ("In game" || "Starting") ? (
      <div className="button button--disabled">Join</div>
    ) : (
      <Link
        className="button"
        to={`/${hashName}[${username}]`}
        onClick={() => joinGame(hashName)}
      >
        Join
      </Link>
    )
  return (
    <div className="room-item">
      <span className="room-item__game-name">{roomName}</span>
      <span className="room-item__game-status">{status}</span>
      <span className="room-item__player-count">{players} / 4</span>
      <span className="room-item__action">{button}</span>
    </div>
  )
}

export default RoomItem
