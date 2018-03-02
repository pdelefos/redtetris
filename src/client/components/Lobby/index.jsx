import React from "react"
import FinalGameList from "../../containers/GameList"
import { createGame } from "../../actions/game"

let gameName = null

const Lobby = () => {
  return (
    <div>
      <input type="text" ref={input => (gameName = input)} />
      <button
        className="button"
        onClick={() => {
          createGame(gameName.value)
        }}
      >
        Create Game
      </button>
      <FinalGameList />
    </div>
  )
}

export default Lobby
