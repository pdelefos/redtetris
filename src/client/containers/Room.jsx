import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import Room from "../components/Room"

const mapStateToProps = state => {
  return {
    game: state.game
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const FinalRoom = connect(mapStateToProps, mapDispatchToProps)(Room)

export default FinalRoom
