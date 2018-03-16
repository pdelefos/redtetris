import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

let RoomItem = ({ gameName, players, hashName, username, joinRoom }) => {
  return (
    <div>
      <span> Game Name: {gameName} </span>
      <br />
      <span> Number of players: {Object.keys(players).length} / 4</span>
      <br />
      <Link
        className="button"
        to={`/${hashName}[${username}]`}
        onClick={() => joinRoom(hashName)}
      >
        Join
      </Link>
      <br />
      <br />
      <br />
    </div>
  )
}

export default RoomItem
