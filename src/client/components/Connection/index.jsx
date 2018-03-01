import React from "react"
import "./style.css"

let Connection = ({ pushUser, notif }) => {
  return (
    <div>
      <div>
        <input type="text" id="username" />
        <button
          className="button"
          onClick={
						() => {
          		pushUser(document.getElementById("username").value)
						}
					}>
          Send user!
        </button>
      </div>
    </div>
  )
}

export default Connection
