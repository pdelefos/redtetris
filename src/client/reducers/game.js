let initialState = {
  status: false,
  hashName: null,
  mode: 0,
  players: {}
}

const game = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_GAME":
      return { ...state, ...action.game }
    case "UPDATE_BOARD":
      return {
        ...state,
        players: {
          ...state.players,
          [action.id]: {
            ...state.players[action.id],
            board: action.board
          }
        }
      }
    case "UPDATE_SCORE":
      return {
        ...state,
        players: {
          ...state.players,
          [action.id]: {
            ...state.players[action.id],
            score: action.score
          }
        }
      }
    default:
      return state
  }
}

export default game
