let initialState = {
  status: 0,
  hashName: null,
  mode: 0,
  players: {}
}

const game = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_GAME":
      return { ...state, ...action.game }
    default:
      return state
  }
}

export default game
