import { connect } from "react-redux"
import { createUser } from "../actions/user"
import { bindActionCreators } from "redux"

import Room from "../components/Room"

const mapStateToProps = state => {
  return {
    room: state.rooms[state.user.currentRoom]
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const FinalRoom = connect(mapStateToProps, mapDispatchToProps)(Room)

export default FinalRoom
