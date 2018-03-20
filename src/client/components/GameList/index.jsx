import React from "react"
import GameItem from "../GameItem"
import "./style.scss"

let gameName

const GameList = ({ games }) => {
  return (
    <ul className="gamelist">
      {games.map(game => {
        return <GameItem key={game.id} {...game} />
      })}
    </ul>
  )
}

export default GameList
