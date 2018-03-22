import React from "react"
import "./style.scss"

const Room = ({ room, ready }) => {
  return (
    <div>
      <div>{room.hashName}</div>
      <ul>
        {Object.keys(room.players).map(key => {
          let player = room.players[key]
          return (
            <li key={key}>
              {player.username}: status: {player.status} score: {player.score}
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
