import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext from '../App/AppContext';
StyleSheetTestUtils.suppressStyleInjection();
describe("Testing the <Header /> Component", () => {
	
	let wrapper;

	wrapper = mount(
		<Header shouldRender />,
		{ context: AppContext }
	);

	

	
	it("<Header /> is rendered without crashing", () => {
		expect(wrapper).to.not.be.an('undefined');
    });
    
    it("the <Header /> component render img", () => {
		expect(wrapper.find('img')).to.have.lengthOf(1);
    });
    
    it("the <Header /> component render h1", () => {
		expect(wrapper.find('h1')).to.have.lengthOf(1);
	});
	it("Verify that the logoutSection is not created", () => {
		let context = {
			user: {
				email: '',
				password: '',
				isLoggedIn: false,
			},
			logOut: () => {},
		};

		let wrapper = mount(
			<Header />,
			{ context: context }
		);
		
		expect(wrapper.find("#logoutSection").at(0)).to.have.lengthOf(0);
	});
	it("Verify that the logoutSection is created", () => {
		let context = {
			user: {
				email: 'a@aa',
				password: 'aaa',
				isLoggedIn: true,
			},
			logOut: () => {},
		};

		let wrapper = mount(
			<Header />,
			{ context: context }
		);
		console.log(wrapper.html())
		expect(wrapper.find("#logoutSection").at(0)).to.not.be.false;
	});

	it("click the logout ", () => {		
		let context = {
			user: {
				email: 'a@aa',
				password: 'aaa',
				isLoggedIn: true,
			},
			logOut: () => {},
		};

		let wrapper = mount(
			<Header />,
			{ context: context }
		);
			console.log(wrapper.html())
		let spy = jest.spyOn(wrapper.instance().context, "logOut");

		
	});

});
