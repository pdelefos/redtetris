import React from "react"
import "./style.css"

let Game = ({ gameName, players, hashName }) => {
  return (
    <div className="game-item">
      <span>Game Name: {gameName}</span>
      <span>{players.length} / 4</span>
      <button className="button">Join !</button>
    </div>
  )
}

export default Game
