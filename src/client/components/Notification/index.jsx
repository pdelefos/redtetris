import React from "react"
import "./style.scss"

import closeCircle from "../../assets/images/x-circle.svg"

let Notification = ({ message, id, status, deleteNotification }) => {
  return (
    <li className="notification">
      <span className="notification__content"> {message} </span>
      <span className="notification__button-container">
        <img
          className="button--close"
          src={closeCircle}
          alt=""
          onClick={() => deleteNotification(id)}
        />
      </span>
    </li>
  )
}

export default Notification
