import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext from '../App/AppContext';
StyleSheetTestUtils.suppressStyleInjection();
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
	
	
	it("verify that the link is not displayed ", () => {
		const contextDefault = {
			user: {
				email: '',
				password: '',
				isLoggedIn: false,
			},
			logOut: () => {},
		};
		wrapper = mount(<AppContext.Provider value={contextDefault}>
				<Footer>
				</Footer>
				</AppContext.Provider>)
		//console.log(wrapper.html())
		expect(wrapper.find(".contact_yg2qaf")).to.have.lengthOf(0);
	});

	it("verify that the link is  displayed ", () => {
		const context = {
			user: {
				email: 'aa@aa',
				password: 'aaa',
				isLoggedIn: true,
			},
			logOut: () => {},
		};
		wrapper = mount(<AppContext.Provider value={context}><Footer></Footer></AppContext.Provider>)
		//console.log(wrapper.html())
		expect(wrapper.find("a")).to.have.lengthOf(1);
	});

});
