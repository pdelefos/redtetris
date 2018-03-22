import { connect } from "react-redux"
import { createRoom } from "../actions/room"
import * as GameActions from "../actions/game"
import { bindActionCreators } from "redux"
import omit from "lodash/omit"

import Board from "../components/Board"

const mapStateToProps = state => {
  return {
    game: state.user.game
  }
}

const mapDispatchToProps = dispatch => {
  GameActions.updateGame(dispatch)
  delete GameActions.updateGame
  return {
    methods: GameActions
  }
}

const FinalBoard = connect(mapStateToProps, mapDispatchToProps)(Board)

export default FinalBoard
