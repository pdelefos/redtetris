import React from "react"
import { Link } from "react-router-dom"
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
      <Link
        className="button"
        to="/lobby"
        onClick={() => {
          pushUser(username.value)
        }}
      >
        Send user!
      </Link>
    </div>
  )
}

export default Connection
