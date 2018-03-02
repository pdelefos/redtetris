import React from "react"
import "./style.css"

let username = null
const Connection = ({ history, pushUser, notif }) => {
  return (
    <div>
      <input
        type="text"
        ref={input => {
          username = input
        }}
      />
      <button
        className="button"
        onClick={() => {
          pushUser(username.value)
          history.push("/lobby")
        }}
      >
        Send user!
      </button>
    </div>
  )
}

export default Connection
