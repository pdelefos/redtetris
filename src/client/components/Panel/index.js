import React from "react"
import "./style.scss"

const Panel = ({ title, subtitle, children }) => {
  return (
    <div className="panel">
      <div className="panel-head">
        <h2 className="panel__title">{title}</h2>
        <h3 className="panel__subtitle">{subtitle}</h3>
      </div>
      <div className="panel__content">{children}</div>
    </div>
  )
}

export default Panel
