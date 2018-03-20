import React from "react"
import "./style.scss"

const Room = ({ room }) => {
  console.log("room", room)
  return (
    <div>
      <div>{room.hashName}</div>
      <ul>
        {Object.keys(room.players).map(key => {
          return <li key={key}>{room.players[key].username}</li>
        })}
      </ul>
    </div>
  )
}

export default Room
