import React from "react"
import "./style.scss"

const Button = ({ playerId, id, player, playerStatus }) => {
  if (playerId == id)
    return (
      <button className="button" onClick={() => playerStatus()}>
        {player.ready ? "Ready" : "Not ready"}
      </button>
    )
  return <div>{player.ready ? "Rready" : "Not ready"}</div>
}

const Room = ({ game, id, playerStatus }) => {
  return (
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
  )
}

export default Room
