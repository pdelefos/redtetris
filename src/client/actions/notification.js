import { socket } from '../socket'

let nextNotifId = 0

const notification = (message) => ({
  type: 'ADD_NOTIF',
  id: nextNotifId++,
  status: 0,
  message
})

export const addNotif = () => (dispatch) => {
  socket.on('notification', (message) => {
    dispatch(notification(message))
  })
}

export const removeNotif = (id) => ({
  type: 'DELETE_NOTIF',
  id
})