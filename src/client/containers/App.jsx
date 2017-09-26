import React from "react"
import { Route, Link } from "react-router-dom"
import HelloWorld from "../components/HelloWorld"
import LyingHasToStop from "../components/LyingHasToStop"

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/lying">Lying has to stop</Link>
        </li>
      </ul>
      <HelloWorld name="World, these are props" />
      <Route exact path="/lying" component={LyingHasToStop} />
    </div>
  )
}

export default App
