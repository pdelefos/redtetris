let initialState = {
  username: "",
  currentRoom: null,
  grid: initGrid(10, 20)
}

function initGrid(nbColumns, nbLines) {
  let array = []

  for (let index = 0; index < nbLines; index++) {
    let line = []
    for (let index = 0; index < nbColumns; index++) {
      line.push(0)
    }
    array.push(line)
  }
  return array
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
    case "UPDATE_GRID":
      return { ...state, grid: action.grid }
    default:
      return state
  }
}

export default user
