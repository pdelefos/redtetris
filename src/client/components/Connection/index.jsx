import React from "react"
import { Link } from "react-router-dom"
import "./style.scss"

import { Redirect } from "react-router"

let usernameInput = null
const Connection = ({
  history,
  updateUser,
  notif,
  username,
  error,
  addError
}) => {
  if (username)
    return (
      <div>
        <Redirect to={`/lobby`} />
      </div>
    )
  return (
    <div>
      <h2 className="input-label font--normal">Choose your player name</h2>
      {error && <div style={{ backgroundColor: "red" }}>CC </div>}
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
            if (verifyUsername(usernameInput.value)) addError()
            else updateUser(usernameInput.value)
          }}
        >
          Start
        </button>
      </div>
    </div>
  )
}

const verifyUsername = username => {
  return usernameInput.value.length == 0 || usernameInput.value.length > 20
}

const handleKeyDown = (updateUserCallback, evt) => {
  if (evt.key === "Enter") {
    if (verifyUsername(usernameInput.value)) addError()
    else updateUserCallback(usernameInput.value)
  }
}

export default Connection
