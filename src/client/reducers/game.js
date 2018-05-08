import omit from "lodash/omit"

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
    case "UPDATE_GAME_INFO":
      return {
        ...state,
        players: {
          ...state.players,
          [action.id]: {
            ...state.players[action.id],
						lineCompleted: action.lineCompleted,
						nextPiece: action.nextPiece,
						score: action.score
          }
        }
      }
    case "DELETE_PLAYER":
      return {
        ...state,
        players: omit(state.players, [action.id])
			}
    default:
      return state
  }
}

export default game
