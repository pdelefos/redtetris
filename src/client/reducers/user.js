let initialState = {
  username: null,
  id: null
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        username: action.username,
        id: action.id
      }
    default:
      return state
  }
}

export default user
