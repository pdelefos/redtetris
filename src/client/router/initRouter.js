import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// Components
import Login from "../containers/Login"

const AppRouter = () => (
  <Router>
		<Login/>
  </Router>
)

export default AppRouter
