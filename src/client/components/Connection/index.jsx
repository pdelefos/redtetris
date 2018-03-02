import React from "react"
import "./style.css"

const Connection = ({ pushUser, notif }) => {
  let username = null
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
        }}
      >
        Send user!
      </button>
    </div>
  )
}

export default Connection
