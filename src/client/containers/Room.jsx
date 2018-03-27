import { connect } from "react-redux"
import { createUser, updateUserRoom, playerReady } from "../actions/user"
import { bindActionCreators } from "redux"

import Room from "../components/Room"

const mapStateToProps = state => {
  return {
    game: state.game
  }
}

const mapDispatchToProps = dispatch => {
  updateUserRoom(dispatch)
  return {
    playerReady: bindActionCreators(playerReady, dispatch)
  }
}

const FinalRoom = connect(mapStateToProps, mapDispatchToProps)(Room)

export default FinalRoom
