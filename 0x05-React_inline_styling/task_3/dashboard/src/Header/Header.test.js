import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from './Header';

describe("Testing the <Header /> Component", () => {
	
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Header shouldRender />);
	});

	it("<Header /> is rendered without crashing", () => {
		expect(wrapper).to.not.be.an('undefined');
    });
    
    it("the <Header /> component render img", () => {
		expect(wrapper.find('img')).to.have.lengthOf(1);
    });
    
    it("the <Header /> component render h1", () => {
		expect(wrapper.find('h1')).to.have.lengthOf(1);
	});

});
