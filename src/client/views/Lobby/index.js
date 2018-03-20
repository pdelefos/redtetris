import React from "react"
import Panel from "../../components/Panel"
import CreateGame from "../../components/CreateGame"
import FinalGamelist from "../../containers/GameList"
import "./style.scss"

const lobbyView = ({ child }) => {
  return (
    <div className="lobby-view font--normal">
      <Panel title="Create a room">
        <CreateGame />
      </Panel>
      <Panel title="Join a room">
        <FinalGamelist />
      </Panel>
    </div>
  )
}

export default lobbyView