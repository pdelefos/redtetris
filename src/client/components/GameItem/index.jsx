import React from "react"
import "./style.css"

let GameItem = ({ gameName, players, hashName }) => {
  return (
    <div className="game-item">
      <span>Game Name: {gameName}</span>
      <span>{players.length} / 4</span>
      <button className="button">Join !</button>
    </div>
  )
}

export default GameItem
