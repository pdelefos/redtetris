import React from "react"
import { Redirect } from "react-router"

let roomName = null

const Lobby = ({ currentGame, username, createRoom }) => {
  if (!currentGame)
    return (
      <div className="input-btn-grp">
        <input
          className="input--text"
          type="text"
          ref={input => (roomName = input)}
        />
        <button
          className="button"
          onClick={() => {
            createRoom(roomName.value)
          }}
        >
          Create a room
        </button>
      </div>
    )
  else
    return (
      <div>
        <Redirect to={`/${currentGame}[${username}]`} />
      </div>
    )
}

export default Lobby
