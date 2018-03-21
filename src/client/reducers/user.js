let initialState = {
  username: null,
  currentRoom: null,
  game: null
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        username: action.username
      }
    case "JOIN_ROOM":
      return { ...state, currentRoom: action.hashName }
    case "UPDATE_GAME":
      return { ...state, game: action.game }
    default:
      return state
  }
}

export default user
