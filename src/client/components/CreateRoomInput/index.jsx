import React from "react"
import { Redirect } from "react-router"

let roomNameInput = null

const CreateRoomInput = ({ currentRoom, username, createRoom }) => {
  if (!currentRoom)
    return (
      <div className="input-btn-grp">
        <input
          className="input--text"
          type="text"
          ref={input => (roomNameInput = input)}
          onKeyDown={evt => handleKeyDown(createRoom, evt)}
          tabIndex="0"
        />
        <button
          className="button"
          onClick={() => {
            createRoom(roomNameInput.value)
          }}
        >
          Create a room
        </button>
      </div>
    )
  else
    return (
      <div>
        <Redirect to={`/${currentRoom}[${username}]`} />
      </div>
    )
}

const handleKeyDown = (createRoomCallback, evt) => {
  if (evt.key === "Enter") createRoomCallback(roomNameInput.value)
}

export default CreateRoomInput
