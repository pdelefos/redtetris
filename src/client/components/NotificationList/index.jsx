import React from "react"
import "./style.css"
import Notification from "../Notification"

let NotificationList = ({ notifications, actions }) => {
  return (
    <ul>
      {notifications.map(notification => {
        return (
          <Notification
            key={notification.id}
            {...notification}
            removeNotification={actions.removeNotification}
          />
        )
      })}
    </ul>
  )
}

export default NotificationList
