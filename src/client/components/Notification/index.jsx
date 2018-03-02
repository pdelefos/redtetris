import React from "react"
import "./style.css"

let Notification = ({ message, id, status, deleteNotification }) => {
  return (
    <li>
      <div className="notification">
        <span> {message} </span>
        <button
          onClick={() => deleteNotification(id)}
          className="button-notif"
        />
      </div>
    </li>
  )
}

export default Notification
