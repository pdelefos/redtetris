let initialState = {
  status: 0,
  hashName: null,
  mode: 0,
  players: {}
}

const game = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case "PLAYER_JOIN_ROOM":
      return { ...state, hashName: action.hashName }
    case "PLAYER_LEAVE_ROOM":
      return { ...state, hashName: null }
    case "GAME_STATUS_UPDATE":
      return { ...state, status: action.status }
    case "GAME_TEST":
      return { ...state }
    default:
      return state
  }
}

export default game
