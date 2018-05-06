import React from "react"
import "./style.scss"

import PlayerList from "../PlayerList"
import Panel from "../Panel"

const Room = ({ game, currentPlayerId, playerStatus, rooms }) => {
  console.log(rooms)
  return (
    <div className="room-view font--normal">
      <Panel title="Players" subtitle={roomPlayersTitle(game.players)}>
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
  return `${nbPlayers}/${maxPlayers}`
}

export default Room
