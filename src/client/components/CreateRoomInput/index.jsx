import React from "react"

let roomNameInput = null

const CreateRoomInput = ({ createRoom }) => {
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
}

const handleKeyDown = (createRoomCallback, evt) => {
  if (evt.key === "Enter") createRoomCallback(roomNameInput.value)
}

export default CreateRoomInput
