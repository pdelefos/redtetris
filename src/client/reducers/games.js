const games = (state = [], action) => {
  switch (action.type) {
    case "ADD_GAME":
      return [
        ...state,
        {
          players: action.newGame.players,
          hashName: action.newGame.hashName,
          gameName: action.newGame.gameName,
          id: action.id
        }
      ]
    case "DELETE_GAME":
      return state.filter(game => game.id !== action.id)
    default:
      return state
  }
}

export default games
