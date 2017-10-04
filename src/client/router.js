import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

// Components
import Hello from "./components/Hello"
import World from "./components/World"

const routes = [
  {
    path: "/hello",
    component: Hello
  },
  {
    path: "/world",
    component: World
  }
]

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
)

const AppRouter = () => (
  <Router>
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

      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </div>
  </Router>
)

export default AppRouter
