import React from "react"
import "./style.scss"
import { _createGrid } from "../../utils"

const Shadow = ({ boards }) => {
  return (
    <div className="shadow-grid">
      {Object.keys(boards).map(id => {
        return (
          <div className="board" key={id}>
            {_createGrid(boards[id].board)}
          </div>
        )
      })}
    </div>
  )
}

export default Shadow
