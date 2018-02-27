import React from "react"
import "./style.css"

let Notification = ({ message, id, status, closeNotification }) => {
  return (
		<li>
			<div className="notification">
				<span> { message } </span>
				<button onClick={ closeNotification }></button>
			</div>
		</li>
  )
}

export default Notification
