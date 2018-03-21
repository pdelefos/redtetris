import React from "react"
import "./style.scss"

import FinalCreateRoomInput from "../../containers/CreateRoomInput"
import FinalRoomList from "../../containers/RoomList"
import Panel from "../../components/Panel"

const Lobby = () => (
	<div className="lobby-view font--normal">

		<Panel title="Create a room">
			<FinalCreateRoomInput />
		</Panel>
		<Panel title="Join a room">
			<FinalRoomList />
		</Panel>
	</div>
)

export default Lobby
