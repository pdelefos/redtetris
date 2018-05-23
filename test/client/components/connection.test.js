import React from 'react'

import chai from 'chai'
import { expect } from 'chai'
import chaiRedux from 'chai-redux'
import * as Enzyme from 'enzyme'
import { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import omit from 'lodash/omit'
import rewire from 'rewire'

chai.use(chaiRedux)
Enzyme.configure({ adapter: new Adapter() })

import Connection from '../../../src/client/components/Connection'
import FinalConnection from '../../../src/client/containers/Connection'
import { Redirect } from 'react-router'

const connection = rewire('../../../src/client/components/Connection/index.jsx')
const verifyUsername = connection.__get__('verifyUsername')

describe('<Connection />', () => {
  it('should contain Redirect has child if no username', () => {
    const wrapper = shallow(<Connection username='fifi' />)
    expect(wrapper.find(Redirect).exists()).to.equal(true)
  })
  it('should contain input has child if username', () => {
    const wrapper = shallow(<Connection username='' />)
    expect(wrapper.find('.connection-input').exists()).to.equal(true)
  })
  // it('should validate on Enter', () => {
  //   const wrapper = mount(<FinalConnection username='' />)
  //   expect(
  //     wrapper
  //       .find('.connection-input')
  //       .find('.input-btn-grp')
  //       .find('.button')
  //       .simulate('click')
  //   )
  // })
  it('verifyUsername() should return true when username is empty', () => {
    expect(verifyUsername('')).to.be.equal(true)
  })
  it('verifyUsername() should return true when username == jeanjeanjeanjeanjeanjean', () => {
    expect(verifyUsername('jeanjeanjeanjeanjeanjean')).to.be.equal(true)
  })
  it('verifyUsername() should return false when username == fifiblop', () => {
    expect(verifyUsername('fifiblop')).to.be.equal(false)
  })
})
