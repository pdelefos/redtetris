import React from "react"
import Game from "../Game"

let gameName

const GameList = ({ games }) => {
  return (
    <ul>
      {games.map(game => {
        return <Game key={game.id} {...game} />
      })}
    </ul>
  )
}

export default GameList
