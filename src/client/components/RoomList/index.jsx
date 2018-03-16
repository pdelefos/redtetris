import React from "react"
import RoomItem from "../RoomItem"

let roomName

const RoomList = ({ rooms, username, joinRoom, deleteGame }) => {
  return (
    <ul>
      {Object.keys(rooms).map(key => {
        let room = rooms[key]
        return (
          <RoomItem
            key={key}
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
