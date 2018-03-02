import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { addGame, deleteGame } from "../actions/Game"
import GameList from "../components/GameList"

const mapStateToProps = state => {
  return {
    games: state.games
  }
}

const mapDispatchToProps = dispatch => {
  addGame(dispatch)
  return {
    deleteGame: bindActionCreators(deleteGame, dispatch)
  }
}

const FinalGame = connect(mapStateToProps, mapDispatchToProps)(GameList)

export default FinalGame
