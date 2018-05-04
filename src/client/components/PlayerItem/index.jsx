import React from "react"
import "./style.scss"

const Button = ({ playerId, id, player, playerStatus }) => {
  if (playerId == id)
    return (
      <button className="button" onClick={() => playerStatus()}>
        {!player.ready ? "Ready" : "Not ready"}
      </button>
    )
  return <div>{player.ready ? "Ready" : "Not ready"}</div>
}

let PlayerItem = ({ player, id, playerStatus }) => {
  return (
    <div className="player-item">
      <span className="player-item__username">{player.username}</span>
      <span className="player-item__score">score: {player.score}</span>
      <span className="player-item__button">
        <Button
          playerId={id}
          id={id}
          player={player}
          playerStatus={playerStatus}
        />
      </span>
    </div>
  )
}

export default PlayerItem
