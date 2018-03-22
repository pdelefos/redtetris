let initialState = {}

// {
// 	id: socket.id,
//  username: "xxx"
// 	game: [[]],
// 	score: 0,
// 	status: 3
// }

const players = (state = initialState, action) => {
  switch (action.type) {
    case "PLAYER_JOIN":
      return { ...state, [action.player.id]: action.player }
    case "PLAYER_READY":
      return {
        ...state,
        [action.player.id]: {
          status: 1
        }
      }
    case "PLAYER_GAME_UPDATE":
      return {
        ...state,
        [action.player.id]: {
          game: action.game
        }
      }
    case "PLAYER_SCORE":
      return {
        ...state,
        [action.player.id]: {
          score: action.score
        }
      }
    case "PLAYER_LEAVE":
      return omit(state, [action.player.id])
    default:
      return state
  }
}

export default players
