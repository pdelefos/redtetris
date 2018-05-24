import React from 'react'
import chai, { expect } from 'chai'
import chaiRedux from 'chai-redux'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rewire from 'rewire'
import { createMockStore } from 'redux-test-utils'
import shallowWithStore from './shallowWithStore'

chai.use(chaiRedux)
Enzyme.configure({ adapter: new Adapter() })

import Board from '../../../src/client/containers/Board'
import reducers from '../../../src/client/reducers'
import { updateUser } from '../../../src/client/actions/user'
import { createRoom, addRoom } from '../../../src/client/actions/room'
import {
  updateGame,
  startGame,
  playerStatus
} from '../../../src/client/actions/game'
import { log } from 'util'

describe('Container / <Board />', () => {
  it('should render', () => {
    const store = chai.createReduxStore({
      reducer: reducers,
      middlewares: [thunk, logger]
    })
    store.dispatch(updateUser('fifiblop'))
    addRoom(store.dispatch)
    updateGame(store.dispatch)
    startGame(store.dispatch)
    createRoom('coucou')

    playerStatus()
    // console.log('==>', store)
    // const wrapper = mount(
    //   <Provider store={store}>
    //     <Board />
    //   </Provider>
    // )
  })
})
