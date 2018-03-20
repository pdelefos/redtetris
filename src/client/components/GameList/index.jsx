import React from "react"
import GameItem from "../GameItem"

let gameName

const GameList = ({ games }) => {
  return (
    <ul>
      {games.map(game => {
        return <GameItem key={game.id} {...game} />
      })}
    </ul>
  )
}

export default GameList
