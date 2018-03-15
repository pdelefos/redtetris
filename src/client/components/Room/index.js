import React from "react"
import "./style.scss"

const Room = ({ room }) => (
  <div>
    <div>{room.hashName}</div>
    <ul>
      {room.players.map(player => {
        return <li>{player.username}</li>
      })}
    </ul>
  </div>
)

export default Room
