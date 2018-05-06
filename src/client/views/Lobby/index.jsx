import React from "react"
import "./style.scss"

import FinalCreateRoomWrapper from "../../containers/CreateRoomWrapper"
import FinalRoomList from "../../containers/RoomList"
import Panel from "../../components/Panel"
import FinalHeader from "../../containers/Header"

const Lobby = () => (
  <div>
    <FinalHeader />
    <div className="lobby-view font--normal">
      <FinalCreateRoomWrapper />
      <FinalRoomList />
    </div>
  </div>
)

export default Lobby
