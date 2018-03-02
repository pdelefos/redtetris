import React from "react"
import { socket } from "../../socket"

let gameName

const GameList = () => {
  return (
    <div>
      <input type="text" ref={input => (gameName = input.value)} />
      <button
        className="button"
        onClick={() => {
          socket.emit("createGame", gameName)
        }}
      >
        Create Game
      </button>
      <button
        className="button"
        onClick={() => {
          socket.emit("fetchGames")
          socket.on("resultFetchGames", games => {
            console.log(games)
          })
        }}
      >
        Fetch games
      </button>
    </div>
  )
}

export default GameList
