const rooms = (state = [], action) => {
  switch (action.type) {
    case "ADD_ROOM":
      return [
        ...state,
        {
          players: action.newRoom.players,
          hashName: action.newRoom.hashName,
          gameName: action.newRoom.gameName,
          id: action.id
        }
      ]
    case "DELETE_ROOM":
      return state.filter(room => room.id !== action.id)
    default:
      return state
  }
}

export default rooms
