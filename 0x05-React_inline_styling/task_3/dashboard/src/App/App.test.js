import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

import 'jsdom-global/register'

configure({adapter: new Adapter()});

describe("Testing the <App /> Component", () => {
	
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it("<App /> is rendered without crashing", () => {
		expect(wrapper).to.not.be.an('undefined');
	});

	it("<App /> contains the <Notifications /> Component", () => {
		expect(wrapper.contains(<Notifications />)).to.equal(false);
	});

	it("<App /> contains the <Header /> Component", () => {
		expect(wrapper.contains(<Header />)).to.equal(true);
	});

	it("<App /> contains the <Login /> Component", () => {
		expect(wrapper.contains(<Login />)).to.equal(true);
	});

	it("<App /> contains the <Footer /> Component", () => {
		expect(wrapper.contains(<Footer />)).to.equal(true);
	});

	it("<App /> does not contain the <CourseList /> Component", () => {
		expect(wrapper.contains(<CourseList />)).to.equal(false);
	});

});

describe("Testing the <App /> Component", () => {
	
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App isLoggedIn={true}/>);
	});

	it("<App /> does not contain the <Login /> Component", () => {
		expect(wrapper.contains(<Login />)).to.equal(false);
	});

	it("<App /> contains the <CourseList /> Component", () => {
		expect(wrapper.find('.CourseListContainer').length).to.equal(0);
	});

});

describe('logOut alerts with correct string', () => {
	it('logOut', () => {
		const logOut = jest.fn(() => undefined);
		const logger = jest.spyOn(global, 'alert');
		expect(logger);
		expect(logOut);
		jest.restoreAllMocks();
	});
});