import { connect } from "react-redux"
import {
  startGame,
  getGrid,
  moveLeft,
  moveRight,
  moveDown
} from "../actions/user"
import { bindActionCreators } from "redux"

import Game from "../views/Game"

const mapStateToProps = state => {
  return {
    grid: state.user.grid
  }
}

const mapDispatchToProps = dispatch => {
  getGrid(dispatch)
  return {
    startGame: startGame,
    moveLeft: moveLeft,
    moveRight: moveRight,
    moveDown: moveDown
  }
}

const FinalGame = connect(mapStateToProps, mapDispatchToProps)(Game)

export default FinalGame
