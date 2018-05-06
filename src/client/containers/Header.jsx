import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Header from "../components/Header"

const mapStateToProps = state => {
  return {
    username: state.user.username,
    roomName: state.game.hashName
      ? state.rooms[state.game.hashName].roomName
      : null
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const FinalHeader = connect(mapStateToProps, mapDispatchToProps)(Header)

export default FinalHeader
