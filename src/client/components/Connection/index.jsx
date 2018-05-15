import React from "react"
import { Link } from "react-router-dom"
import "./style.scss"

import { Redirect } from "react-router"

let usernameInput = null
const Connection = ({ history, updateUser, notif, username }) => {
  if (username)
    return (
      <div>
        <Redirect to={`/lobby`} />
      </div>
    )
  return (
    <div>
      <h2 className="input-label font--normal">Choose your player name</h2>
      <div className="input-btn-grp">
        <input
          className="input--text"
          type="text"
          onKeyDown={evt => handleKeyDown(updateUser, evt)}
          tabIndex="0"
          ref={input => {
            usernameInput = input
          }}
        />
        <button
          className="button"
          onClick={() => {
            console.log(usernameInput.value)
            if (usernameInput.value.length < 4) return
            else updateUser(usernameInput.value)
          }}
        >
          Start
        </button>
      </div>
    </div>
  )
}

const handleKeyDown = (updateUserCallback, evt) => {
  if (evt.key === "Enter") {
    if (usernameInput.value.length < 4) return
    updateUserCallback(usernameInput.value)
  }
}

export default Connection
