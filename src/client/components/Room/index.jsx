import React from "react"
import "./style.scss"

import PlayerList from "../PlayerList"
import Panel from "../Panel"

const Room = ({ game, currentPlayerId, playerStatus, rooms }) => {
  return (
    <div className="room-view font--normal">
      <Panel title={roomPlayersTitle(game.players)}>
        <PlayerList
          players={game.players}
          currentPlayerId={currentPlayerId}
          playerStatus={playerStatus}
        />
      </Panel>
    </div>
  )
}

const roomPlayersTitle = players => {
  let nbPlayers = Object.keys(players).length
  let maxPlayers = 4
  return `Player ${nbPlayers}/${maxPlayers}`
}

export default Room
