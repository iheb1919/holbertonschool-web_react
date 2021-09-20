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
import { StyleSheetTestUtils, } from 'aphrodite';
import 'jsdom-global/register'
StyleSheetTestUtils.suppressStyleInjection();
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
		expect(wrapper.find(Notifications )).to.have.lengthOf(1);
	});

	it("<App /> contains the <Header /> Component", () => {
		expect(wrapper.contains(<Header  />)).to.equal(true);
	});

	it("<App /> contains the <Login /> Component", () => {
		
		expect(wrapper.contains(<Login logIn={wrapper.instance().logIn}/>)).to.equal(true);
	});

	it("<App /> contains the <Footer /> Component", () => {
		
		expect(wrapper.contains(<Footer className="footer_fhffik" />)).to.equal(true);
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
describe("Verify <App /> on state change", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});

	it("verify that the default state for displayDrawer is false & after calling handleDisplayDrawer, the state.displayDrawer should now be true", () => {
		expect(wrapper.state('displayDrawer')).to.equal(false);
		wrapper.instance().handleDisplayDrawer();
		expect(wrapper.state('displayDrawer')).to.equal(true);
	});

	it("verify that after calling handleHideDrawer, the state.displayDrawer is updated to be false", () => {
		wrapper.instance().handleHideDrawer();
		expect(wrapper.state('displayDrawer')).to.equal(false);
	});
	it("verify that the logIn function updates the state correctly", () => {
		const appComp = mount(<App />);
		appComp.setState({
			user: {
				email: '',
				password: '',
				isLoggedIn: false,
			},
			logOut: () => {},
		});
		appComp.instance().logIn('aaa@a', 'aaa');
		expect(appComp.state().user.isLoggedIn).to.equal(true);
	});
	
	it("Verify that the logOut function updates the state correctly", () => {
		const appComp = mount(<App />);
		appComp.setState({
			user: {
				email: 'aaaa@aaa',
				password: 'aaaa',
				isLoggedIn: true,
			},
			logOut: () => {},
		});
		appComp.instance().logOut();
		expect(appComp.state().user.isLoggedIn).to.equal(false);		
	});

});