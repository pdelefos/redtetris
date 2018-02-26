let nextNotifId = 0

export const addNotif = (message) => ({
  type: 'ADD_NOTIF',
	id: nextNotifId++,
	status: 0,
  message
})