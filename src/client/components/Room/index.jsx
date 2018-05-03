import React from "react"
import "./style.scss"

import PlayerList from "../PlayerList"
import Panel from "../Panel"

const Room = ({ game, id, playerStatus, rooms }) => {
  return (
    <div className="room-view">
      <Panel title={rooms[game.hashName].roomName}>coucou</Panel>
      <Panel title="Players">
        <PlayerList
          players={game.players}
          id={id}
          playerStatus={playerStatus}
        />
      </Panel>
    </div>
  )
}

export default Room
