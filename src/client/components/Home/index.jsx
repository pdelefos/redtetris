import React from "react"
import "./style.css"
import Connection from '../../containers/Connection'
import NotificationList from '../../containers/NotificationList'

let Home = () => {
  return (
		<div>
			<Connection />
			<NotificationList />
		</div>
  )
}

export default Home
