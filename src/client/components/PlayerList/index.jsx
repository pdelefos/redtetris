import React from "react"
import "./style.scss"

import PlayerItem from "../PlayerItem"

let PlayerList = ({ players, playerStatus, id }) => {
  return (
    <ul className="player-list">
      {Object.keys(players).map(key => {
        let player = players[key]
        return (
          <PlayerItem
            key={key}
            player={player}
            id={id}
            playerStatus={playerStatus}
          />
        )
      })}
    </ul>
  )
}

export default PlayerList
