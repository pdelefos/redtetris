import React from "react"
import { Route, Link } from "react-router-dom"
import Hello from "../components/Hello"
import World from "../components/World"

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hello">Hello</Link>
        </li>
        <li>
          <Link to="/world">World</Link>
        </li>
      </ul>
      <Route exact path="/hello" component={Hello} />
      <Route exact path="/world" component={World} />
    </div>
  )
}

export default App
