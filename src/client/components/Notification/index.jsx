import React from "react"
import "./style.css"

let Notification = ({ closeNotification, message, id, status }) => {
  return (
		<li>
			<div class="notification">
				<span> { message } </span>
				<button onClick={ closeNotification }></button>
			</div>
		</li>
  )
}

export default Notification
