import React from "react"
import { Redirect } from "react-router"

import CreateRoomInput from "../CreateRoomInput"
import Panel from "../Panel"
import CreateIcon from "../../assets/images/edit.svg"

const CreateRoomWrapper = ({ currentRoom, username, createRoom }) => {
  if (!currentRoom)
    return (
      <Panel title="Create room" icon={CreateIcon}>
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
