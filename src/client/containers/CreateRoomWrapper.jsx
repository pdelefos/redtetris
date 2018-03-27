import { connect } from "react-redux"
import { createRoom } from "../actions/room"
import { bindActionCreators } from "redux"

import CreateRoomWrapper from "../components/CreateRoomWrapper"

const mapStateToProps = state => {
  return {
    currentRoom: state.game.hashName,
    username: state.user.username
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createRoom: createRoom
  }
}

const FinalCreateRoomWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRoomWrapper)

export default FinalCreateRoomWrapper
