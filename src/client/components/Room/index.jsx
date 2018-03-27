import React from "react"
import "./style.scss"

const Room = ({ game, ready }) => {
  return (
    <div>
      <div>{game.hashName}</div>
      <ul>
        {Object.keys(game.players).map(key => {
          let player = game.players[key]
          return (
            <li key={key}>
              {player.username}: status: {player.status} score:{" "}
              {player.score}
              <button className="button" onClick={() => ready()}>
                {player.status == 0 ? "ready" : "unready"}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Room
