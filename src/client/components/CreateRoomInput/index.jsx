import React from "react"

let roomName = null

const CreateRoomInput = ({ createRoom }) => {
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
}

export default CreateRoomInput
