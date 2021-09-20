import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';
StyleSheetTestUtils.suppressStyleInjection();
describe("Testing the <Login /> Component", () => {
	
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Login shouldRender />);
	});

	it("<Login /> is rendered without crashing", () => {
		expect(wrapper).to.not.be.an('undefined');
    });
    
    it("the <Login /> component render 2 inputs", () => {
		expect(wrapper.find('input')).to.have.lengthOf(3);
    });
    
    it("the <Login /> component render 2 labels", () => {
		console.log(wrapper.html())
		expect(wrapper.find('label')).to.have.lengthOf(2);
	});
	it('Verify that the submit button is disabled by default', () => {
		expect(wrapper.instance().state.enableSubmit).to.equal(false);
	});

	it('verify that after changing the value of the two inputs, the button is enabled', () => {
		const emailInput = wrapper.find('input').at(0);
		const passwordInput = wrapper.find('input').at(1);
		emailInput.simulate('change', {target: {value: 'test'}});
		passwordInput.simulate('change', {target: {value: 'test'}});
		expect(wrapper.state('enableSubmit')).to.equal(true)
	});

});
