let initialState = {
  username: "",
  currentRoom: null,
  ready: false
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
    default:
      return state
  }
}

export default user
