import React from "react"
import "./style.css"

let Login = ({ createUser, notif }) => {
  notif() // changer le nom pour un truc du style listenNotif()
  return (
    <div>
      <div>
        <input type="text" id="username" />
        <button
          className="button"
          onClick={() => {
            createUser(document.getElementById("username").value)
          }}
        >
          Send user!
        </button>
      </div>
    </div>
  )
}

export default Login
