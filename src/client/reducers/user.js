let initialState = {
  username: null,
  id: null,
  error: false
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        username: action.username,
        id: action.id
      }
    case "ADD_ERROR":
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
}

export default user
