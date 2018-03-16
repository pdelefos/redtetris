import React from "react"
import { Link } from "react-router-dom"
import "./style.scss"

let username = null
const Connection = ({ history, pushUser, notif }) => {
  return (
    <div>
      <h2 className="input-label font--normal">Choose your player name</h2>
      <div className="input-btn-grp">
        <input
          className="input--text"
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
          Start
        </Link>
      </div>
    </div>
  )
}

export default Connection
