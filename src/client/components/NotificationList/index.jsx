import React from "react"
import "./style.css"
import Notification from "../Notification"

let NotificationList = ({ notifications, deleteNotification }) => {
  return (
    <ul>
      {notifications.map(notification => {
        return (
          <Notification
            key={notification.id}
            {...notification}
            deleteNotification={deleteNotification}
          />
        )
      })}
    </ul>
  )
}

export default NotificationList
