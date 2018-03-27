import { connect } from "react-redux"
import * as BoardActions from "../actions/board"
import { bindActionCreators } from "redux"
import omit from "lodash/omit"

import Board from "../components/Board"

const mapStateToProps = state => {
  return {}
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
