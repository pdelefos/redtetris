import React from "react"
import "./style.css"
import Notification from '../Notification'

let NotificationList = ({ notifications, actions }) => {
  actions.addNotif()
  return (
		<ul>
    { notifications.map(notification => {
      console.log(notification)
      return <Notification
        key={ notification.id }
        { ...notification }
        onClick={() => action.closeNotification(notification.id) }
      />
    }
    )}
    </ul>
  )
}

export default NotificationList
