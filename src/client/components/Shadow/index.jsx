import React from "react"
import "./style.scss"
import { _createGrid } from "../../utils"

const Shadow = ({ boards }) => {
  console.log("boards inside shadow", boards)
  return (
    <div className="shadow-grid">
      {Object.keys(boards).map(id => {
        return <div className="board">{_createGrid(boards[id].board)}</div>
      })}
    </div>
  )
}

export default Shadow
