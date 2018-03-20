import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as GameActions from "../actions/game"
import GameList from "../components/GameList"

const mapStateToProps = state => {
  return {
    games: state.games
  }
}

const mapDispatchToProps = dispatch => {
  GameActions.addGame(dispatch)
  GameActions.fetchGameList()
  GameActions.updateGameList(dispatch)
  return {
    deleteGame: bindActionCreators(GameActions.deleteGame, dispatch)
  }
}

const FinalGameList = connect(mapStateToProps, mapDispatchToProps)(GameList)

export default FinalGameList
