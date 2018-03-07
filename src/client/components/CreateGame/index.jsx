import React from "react"
import { createGame } from "../../actions/game"

let gameName = null

const CreateGame = () => {
  return (
    <div>
      <div className="input-btn-grp">
        <input
          className="input--text"
          type="text"
          ref={input => (gameName = input)}
        />
        <button
          className="button"
          onClick={() => {
            createGame(gameName.value)
          }}
        >
          Create Game
        </button>
      </div>
    </div>
  )
}

export default CreateGame
