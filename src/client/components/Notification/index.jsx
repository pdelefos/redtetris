import React from "react"
import "./style.css"

let Notification = ({ message, id, status, removeNotification }) => {
	console.log('remove notif', removeNotification)
  return (
		<li>
			<div className="notification">
				<span> { message } </span>
				<button onClick={
					() => removeNotification(id)
				} className="button-notif"></button>
			</div>
		</li>
  )
}

export default Notification
