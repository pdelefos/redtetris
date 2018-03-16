import React from "react"
import FinalRoomList from "../../containers/RoomList"
import { createRoom } from "../../actions/room"
import { Link } from "react-router-dom"

let roomName = null

const Lobby = () => {
  return (
    <div>
      <input type="text" ref={input => (roomName = input)} />
      <Link
        className="button"
        to="/"
        onClick={() => {
          let x = createRoom(roomName.value)
          console.log("new room", x)
        }}
      >
        Create a room
      </Link>
      <FinalRoomList />
    </div>
  )
}

export default Lobby
