import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe("Testing the <Footer /> Component", () => {
	
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Footer shouldRender />);
	});

	it("<Footer /> is rendered without crashing", () => {
		expect(wrapper).to.not.be.an('undefined');
    });
    
    it("<Footer /> renders at least the text: Copyright", () => {
		expect(wrapper.children('p').html()).to.include('Copyright');
	});

});
