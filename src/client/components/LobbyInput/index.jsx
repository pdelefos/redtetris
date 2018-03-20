import React from "react"

let roomName = null

const Lobby = props => {
  console.log("props", props)
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
        {props.history.push(`/${props.currentGame}[${props.username}]`)}
      </div>
    )
}

export default Lobby
