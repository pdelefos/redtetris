import React from "react"
import { Redirect } from "react-router"

import CreateRoomInput from "../CreateRoomInput"

const CreateRoomWrapper = ({ currentRoom, username, createRoom }) => {
  if (!currentRoom)
    return (
      <div>
        <CreateRoomInput createRoom={createRoom} />
      </div>
    )
  else
    return (
      <div>
        <Redirect to={`/${currentRoom}[${username}]`} />
      </div>
    )
}

export default CreateRoomWrapper
