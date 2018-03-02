import React from "react"
import "./style.css"

let Game = ({ gameName, players, hashName }) => {
  return (
    <div>
      <span> Game Name: {gameName} </span>
      <br />
      <span> Number of players: {players.length} / 4</span>
      <br />
      <button className="button">Join !</button>
      <br />
      <br />
      <br />
    </div>
  )
}

export default Game
