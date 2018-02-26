let initialState = {
	username: "",
	socketId: ""
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_USER':
		  return {
				...state, 
				username: action.username,
				socketId: action.id
			}
    default:
      return state
  }
}
  
export default user
