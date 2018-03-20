import React from "react"
import "./style.scss"

const Panel = ({ title, children }) => {
  return (
    <div className="panel">
      <h2 className="panel__title">{title}</h2>
      <div className="panel__content">{children}</div>
    </div>
  )
}

export default Panel
