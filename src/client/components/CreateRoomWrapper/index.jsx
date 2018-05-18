import React from "react"
import { Redirect } from "react-router"

import CreateRoomInput from "../CreateRoomInput"
import Panel from "../Panel"
import CreateIcon from "../../assets/images/edit.svg"

const CreateRoomWrapper = ({
  currentRoom,
  username,
  createRoom,
  error,
  addError
}) => {
  if (!currentRoom)
    return (
      <Panel title="Create room" icon={CreateIcon}>
        <CreateRoomInput
          addError={addError}
          error={error}
          createRoom={createRoom}
        />
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
