import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// Components
import Hello from '../components/Hello'
import Counter from '../containers/Counter'

const AppRouter = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/hello'>Hello</Link>
        </li>
        <li>
          <Link to='/counter'>Counter</Link>
        </li>
      </ul>
      <Route exact path="/" />
      <Route path="/hello" component={ Hello } />
      <Route path="/counter" component={ Counter } />
    </div>
  </Router>
)

export default AppRouter
