import React from "react"
import { socket } from "../../socket"

let gameName

const Lobby = () => {
  return (
    <div>
      <input type="text" ref={input => (gameName = input.value)} />
      <button
        className="button"
        onClick={() => {
          socket.emit("createGame", gameName)
        }}
      />
      <button
        className="button"
        onClick={() => {
          socket.emit("fetchGames")
          socket.on("resultFetchGames", games => {
            console.log(games)
          })
        }}
      />
    </div>
  )
}

export default Lobby
