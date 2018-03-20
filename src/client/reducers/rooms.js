import omit from "lodash/omit"

const rooms = (state = {}, action) => {
  switch (action.type) {
    case "ADD_ROOM":
      return {
        ...state,
        [action.newRoom.hashName]: {
          players: action.newRoom.players,
          gameName: action.newRoom.gameName,
          hashName: action.newRoom.hashName
        }
      }
    case "DELETE_ROOM":
      return _.omit(state, action.hashName)
    default:
      return state
  }
}

export default rooms
