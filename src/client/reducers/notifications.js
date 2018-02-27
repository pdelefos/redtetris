const notifications = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTIF':
		  return [
				...state,
				{
					id: action.id,
					message: action.message,
					state: 0
				}
			]
		case 'DELETE_NOTIF':
			return state.filter(
				(message) => message.content !== action.id
			)
		case 'UPDATE_NOTIF':
			return state.map(
				(message) => (message.id === action.id)
					? message.status = 1
					: message
			)
    default:
      return state
  }
}
  
export default notifications
