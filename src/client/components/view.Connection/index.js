import React from "react"
import Connection from "../Connection/index"

import "./style.scss"

const ConnectionView = () => {
  return (
    <div className="connection-view">
      <div className="bloc">
        <h1 className="logo">
          <span className="logo--red">RED</span>
          <br />TETRIS
        </h1>
      </div>
      <div className="bloc">
        <Connection />
      </div>
    </div>
  )
}

export default ConnectionView
