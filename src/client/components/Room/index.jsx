import React from "react"
import "./style.scss"

import PlayerList from "../PlayerList"
import Panel from "../Panel"

const Room = ({ game, currentPlayerId, playerStatus, rooms }) => {
  return (
    <div className="room-view font--normal">
      <Panel title="Players" subtitle={roomPlayersTitle(game.players)}>
        <PlayerList
          players={game.players}
          currentPlayerId={currentPlayerId}
          playerStatus={playerStatus}
          gameStatus={game.status}
        />
      </Panel>
    </div>
  )
}

const roomPlayersTitle = players => {
  let nbPlayers = Object.keys(players).length
  let maxPlayers = 4
  return `${nbPlayers}/${maxPlayers}`
}

export default Room
