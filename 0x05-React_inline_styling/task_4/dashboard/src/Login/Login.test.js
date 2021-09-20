import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Login from './Login';

describe("Testing the <Login /> Component", () => {
	
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Login shouldRender />);
	});

	it("<Login /> is rendered without crashing", () => {
		expect(wrapper).to.not.be.an('undefined');
    });
    
    it("the <Login /> component render 2 inputs", () => {
		expect(wrapper.find('input')).to.have.lengthOf(2);
    });
    
    it("the <Login /> component render 2 labels", () => {
		expect(wrapper.find('label')).to.have.lengthOf(2);
	});

});
