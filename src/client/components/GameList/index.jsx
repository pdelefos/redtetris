import React from "react"
import Game from "../Game"
import "./style.scss"

let gameName

const GameList = ({ games }) => {
  return (
    <ul className="gamelist">
      {games.map(game => {
        return <Game key={game.id} {...game} />
      })}
    </ul>
  )
}

export default GameList
