import React from "react"
import { Redirect } from "react-router"

import CreateRoomInput from "../CreateRoomInput"
import Panel from "../Panel"

const CreateRoomWrapper = ({ currentRoom, username, createRoom }) => {
  if (!currentRoom)
    return (
      <Panel title="Create room">
        <CreateRoomInput createRoom={createRoom} />
      </Panel>
    )
  else
    return (
      <div>
        <Redirect to={`/${currentRoom}[${username}]`} />
      </div>
    )
}

export default CreateRoomWrapper
