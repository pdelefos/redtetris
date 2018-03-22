let initialState = {
  username: null
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        username: action.username
      }
    default:
      return state
  }
}

export default user
