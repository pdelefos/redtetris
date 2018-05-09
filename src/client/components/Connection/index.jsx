import React from "react"
import { Link } from "react-router-dom"
import "./style.scss"

import { Redirect } from "react-router"

let usernameInput = null
const Connection = ({ history, updateUser, notif }) => {
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
          onKeyDown={evt => handleKeyDown(updateUser, evt)}
          tabIndex="0"
        />
        <Link
          className="button"
          to="/lobby"
          onClick={() => {
            updateUser(usernameInput.value)
          }}
        >
          Start
        </Link>
      </div>
    </div>
  )
}

const handleKeyDown = (updateUserCallback, evt) => {
  if (evt.key === "Enter") {
    console.log("Enter")
    // updateUserCallback(usernameInput.value)
    // return <Redirect to={`/lobby`} />
  }
}

export default Connection
