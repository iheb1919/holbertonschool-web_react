import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount, } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom.js';
import BodySection from './BodySection.js';

configure({
	adapter: new Adapter()
});

describe("Testing the BodySectionWithMarginBottom", () => {

	it("Renders BodySection Component correctly", () => {
		const props = {
			title: 'title',
			children: React.createElement('p', 'test child'),
		};

		const wrapper = shallow(
			<BodySectionWithMarginBottom {...props} />
		);
		
		expect(wrapper.html()).to.equal('<div class="bodySectionWithMargin"><div class="bodySection"><h2>title</h2><p></p></div></div>');
	});

});