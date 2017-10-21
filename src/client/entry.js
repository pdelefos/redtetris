import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import store from './store/initStore' 
import App from './App'


const io = require('socket.io-client')  
const socket = io('http://localhost:8081/')


const render = App => {
  ReactDOM.render(
      <Provider store={ store }>
        <AppContainer>
          <Router>
            <App />
          </Router>
        </AppContainer>
      </Provider>,
    document.getElementById('root')
  )
}

if (process.env.NODE_ENV !== 'production') {
  console.log('[entry.js] Looks like we are in development mode!')
} else {
  console.log('[entry.js] Looks like we are in prod mode!')
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  })
}
