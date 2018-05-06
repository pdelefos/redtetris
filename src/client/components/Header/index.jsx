import React from "react"
import "./style.scss"

import Logo from "../Logo"

let Header = ({ username, roomName }) => {
  return (
    <div className="header">
      <span className="header__left">
        <Logo />
      </span>
      <span className="header__middle">
        {roomName && roomName.toUpperCase()}
      </span>
      <span className="header__right">
        Hello {!username ? "Anonymous" : username}
      </span>
    </div>
  )
}

export default Header
