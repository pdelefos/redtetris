import React from "react"

let roomNameInput = null

const CreateRoomInput = ({ createRoom, addError, error }) => {
  console.log("error", error)
  return (
    <div className="input-btn-grp">
      {error && <div className="input-error">CECI EST UNE ERREUR</div>}
      <input
        className="input--text"
        type="text"
        ref={input => (roomNameInput = input)}
        onKeyDown={evt => handleKeyDown(createRoom, addError, evt)}
        tabIndex="0"
      />
      <button
        className="button"
        onClick={() => {
          if (verifyRoomName(roomNameInput)) {
            createRoom(roomNameInput.value)
            addError(false)
          } else addError(true)
        }}
      >
        Create a room
      </button>
    </div>
  )
}

const verifyRoomName = roomInput => {
  let reg = new RegExp("^([a-zA-Z0-9]{1,20})$")
  if (reg.test(roomInput.value)) return true
  return false
}

const handleKeyDown = (createRoomCallback, addError, evt) => {
  if (evt.key === "Enter") {
    if (verifyRoomName(roomNameInput)) {
      createRoomCallback(roomNameInput.value)
      addError(false)
    } else addError(true)
  }
}

export default CreateRoomInput
