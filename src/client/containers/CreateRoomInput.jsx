import { connect } from "react-redux"
import { createRoom } from "../actions/room"
import { forceJoinRoom } from "../actions/user"
import { bindActionCreators } from "redux"

import CreateRoomInput from "../components/CreateRoomInput"

const mapStateToProps = state => {
	return {
		currentRoom: state.user.currentRoom,
		username: state.user.username
	}
}

const mapDispatchToProps = dispatch => {
	forceJoinRoom(dispatch)
	return {
		createRoom: createRoom
	}
}

const FinalCreateRoomInput = connect(mapStateToProps, mapDispatchToProps)(CreateRoomInput)

export default FinalCreateRoomInput
