import React from "react"
import FinalRoomList from "../../containers/RoomList"
import { createRoom } from "../../actions/room"

let roomName = null

const Lobby = () => {
  return (
    <div>
      <input type="text" ref={input => (roomName = input)} />
      <button
        className="button"
        onClick={() => {
          createRoom(roomName.value)
        }}
      >
        Create a room
      </button>
      <FinalRoomList />
    </div>
  )
}

export default Lobby
