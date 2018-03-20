import { connect } from "react-redux"
import { createRoom } from "../actions/room"
import { forceJoinRoom } from "../actions/user"
import { bindActionCreators } from "redux"
import { withRouter } from "react-router-dom"

import Lobby from "../components/LobbyInput"

const mapStateToProps = state => {
  return {
    currentGame: state.user.currentRoom,
    username: state.user.username
  }
}

const mapDispatchToProps = dispatch => {
  forceJoinRoom(dispatch)
  return {
    createRoom: createRoom
  }
}

const FinalLobby = connect(mapStateToProps, mapDispatchToProps)(Lobby)

export default withRouter(FinalLobby)
