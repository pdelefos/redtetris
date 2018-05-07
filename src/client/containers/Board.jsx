import { connect } from "react-redux"
import * as BoardActions from "../actions/board"
import { deletePlayer } from "../actions/game"
import { bindActionCreators } from "redux"
import omit from "lodash/omit"

import Board from "../components/Board"

const mapStateToProps = state => {
  let currentPlayer = state.game.players[state.user.id]
  return {
    board: currentPlayer.board,
    score: currentPlayer.score
  }
}

const mapDispatchToProps = dispatch => {
  BoardActions.updateBoard(dispatch)
  deletePlayer(dispatch)
  return {
    actions: omit(BoardActions, ["updateBoard"])
  }
}

const FinalBoard = connect(mapStateToProps, mapDispatchToProps)(Board)

export default FinalBoard
