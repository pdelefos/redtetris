import React from "react"
import "./style.css"
import Notification from '../Notification'

let NotificationList = ({ notifications, closeNotification }) => {
  return (
		<ul>
    { notifications.map(notification =>
      <Notification
        key={ notification.id }
        { ...notification }
        onClick={() => closenotification(notif.id) }
      />
    )}
  </ul>
  )
}

export default NotificationList
