import React from "react"
import "./style.scss"

const Button = ({
  playerId,
  currentPlayerId,
  player,
  playerStatus,
  gameStatus
}) => {
  if (playerId == currentPlayerId) {
    if (gameStatus == "Starting")
      return <button className="button button--disabled">Ready</button>
    return (
      <button className="button" onClick={() => playerStatus()}>
        {!player.ready ? "Ready" : "Not ready"}
      </button>
    )
  }
  return (
    <div className="player-item__not-ready">
      {player.ready ? "Ready" : "Not ready"}
    </div>
  )
}

let PlayerItem = ({
  player,
  currentPlayerId,
  playerStatus,
  playerId,
  gameStatus
}) => {
  let isCurrentPlayer = playerId === currentPlayerId
  let selectedClass = isCurrentPlayer ? "player-item--current" : ""
  return (
    <div className={"player-item " + selectedClass}>
      <span className="player-item__username">{player.username}</span>
      <span className="player-item__score">{player.score} pts</span>
      <span className="player-item__button">
        <Button
          playerId={playerId}
          currentPlayerId={currentPlayerId}
          player={player}
          playerStatus={playerStatus}
          gameStatus={gameStatus}
        />
      </span>
    </div>
  )
}

export default PlayerItem
