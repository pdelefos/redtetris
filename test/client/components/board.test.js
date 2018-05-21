import React from "react"

import { expect } from "chai"
import chaiRedux from "chai-redux"
import * as Enzyme from "enzyme"
import { shallow } from "enzyme"
import Adapter from 'enzyme-adapter-react-16';

import Board from "../../../src/client/components/Board"
import { handleKeyDown } from "../../../src/client/components/Board"

chai.use(chaiRedux)
Enzyme.configure({ adapter: new Adapter() });

let boardSample = [[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0]]

describe("<Board />", () => {
	it("should contain a 4 lines, 4 columns grid ", () => {
		const wrapper = shallow(<Board board={boardSample} />)
		expect(wrapper.find('.grid').exists()).to.equal(true)
	})
	it("grid should have 4 lines", () => {
		const wrapper = shallow(<Board board={boardSample} />)
		expect(wrapper.find('.grid').children()).to.have.length(4)
	})
	it("each lines should have 4 columns", () => {
		const wrapper = shallow(<Board board={boardSample} />)
		wrapper.find('.grid').childAt(0).forEach(line => {
			expect(line.children()).to.have.length(4)
		});
	})
	it("should send proper action on UP keydown", () => {
		const wrapper = shallow(<Board board={boardSample} />)
		wrapper.simulate('KeyDown', { key: 'ArrowUp' })
		//test store
	})
})
