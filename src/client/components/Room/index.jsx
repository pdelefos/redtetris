import React from "react"
import "./style.scss"

import PlayerList from "../PlayerList"
import Panel from "../Panel"
import Arrow from "../../assets/images/arrow-left.svg"

const Room = ({ game, currentPlayerId, playerStatus, rooms, leaveGame }) => {
  return (
    <div className="room-view font--normal">
      <button
        className="button button--grey button--icon"
        onClick={() => {
          if (game.status != "Starting") leaveGame()
        }}
      >
        <img src={Arrow} alt="left arrow icon" className="button__icon" />{" "}
        Return to lobby
      </button>
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
