import React from "react"
import "./style.scss"

import PlayerItem from "../PlayerItem"

let PlayerList = ({ players, playerStatus, currentPlayerId }) => {
  return (
    <ul className="player-list">
      {Object.keys(players).map(playerId => {
        let player = players[playerId]
        return (
          <PlayerItem
            key={playerId}
            playerId={playerId}
            player={player}
            currentPlayerId={currentPlayerId}
            playerStatus={playerStatus}
          />
        )
      })}
    </ul>
  )
}

export default PlayerList
