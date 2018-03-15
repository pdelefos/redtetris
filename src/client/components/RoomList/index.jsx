import React from "react"
import RoomItem from "../RoomItem"

let roomName

const RoomList = ({ rooms, username, joinRoom, deleteGame }) => {
  return (
    <ul>
      {rooms.map(room => {
        return (
          <RoomItem
            key={room.id}
            {...room}
            joinRoom={joinRoom}
            username={username}
          />
        )
      })}
    </ul>
  )
}

export default RoomList
