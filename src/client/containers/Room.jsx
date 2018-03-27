import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { playerStatus } from "../actions/game"

import Room from "../components/Room"

const mapStateToProps = state => {
  return {
    game: state.game,
    id: state.user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    playerStatus: playerStatus
  }
}

const FinalRoom = connect(mapStateToProps, mapDispatchToProps)(Room)

export default FinalRoom
