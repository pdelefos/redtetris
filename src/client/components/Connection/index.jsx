import React from "react"
import { Link } from "react-router-dom"
import "./style.scss"

import { Redirect } from "react-router"

let usernameInput = null
const Connection = ({ history, pushUser, notif }) => {
  return (
    <div>
      <h2 className="input-label font--normal">Choose your player name</h2>
      <div className="input-btn-grp">
        <input
          className="input--text"
          type="text"
          ref={input => {
            usernameInput = input
          }}
          onKeyDown={evt => handleKeyDown(pushUser, evt)}
          tabIndex="0"
        />
        <Link
          className="button"
          to="/lobby"
          onClick={() => {
            pushUser(usernameInput.value)
          }}
        >
          Start
        </Link>
      </div>
    </div>
  )
}

const handleKeyDown = (pushUserCallback, evt) => {
  if (evt.key === "Enter") {
    pushUserCallback(usernameInput.value)
    return <Redirect to={`/lobby`} />
  }
}

export default Connection
