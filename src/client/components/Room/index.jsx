import React from "react"
import "./style.scss"

const Button = ({ playerId, id, player, playerStatus }) => {
  if (playerId == id)
    return (
      <button className="button" onClick={() => playerStatus()}>
        {!player.ready ? "Not ready" : "Ready"}
      </button>
    )
  return <div>{player.ready ? "Not ready" : "Ready"}</div>
}

const Room = ({ game, id, playerStatus }) => {
  return (
    <div>
      <ul>
        {Object.keys(game.players).map(key => {
          let player = game.players[key]
          return (
            <li key={key}>
              {player.username}
              <Button
                playerId={key}
                id={id}
                player={player}
                playerStatus={playerStatus}
              />
              <br />
              score: {player.score}
              <br />
              <br />
              <br />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Room
