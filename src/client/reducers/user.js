let initialState = {
	username: "",
	socketId: ""
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_USER':
		  return {
				...state, 
				username: action.name,
				socketId: action.id
			}
    default:
      return state
  }
}
  
export default user
