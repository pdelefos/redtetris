import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as RoomActions from "../actions/room"
import { joinRoom } from "../actions/user"
import RoomList from "../components/RoomList"

const mapStateToProps = state => {
  return {
    rooms: state.rooms,
    username: state.user.username
  }
}

const mapDispatchToProps = dispatch => {
  RoomActions.addRoom(dispatch)
  RoomActions.fetchRoomList()
  RoomActions.updateRoomList(dispatch)
  return {
    joinRoom: bindActionCreators(joinRoom, dispatch),
    deleteRoom: bindActionCreators(RoomActions.deleteRoom, dispatch)
  }
}

const FinalRoomList = connect(mapStateToProps, mapDispatchToProps)(RoomList)

export default FinalRoomList
