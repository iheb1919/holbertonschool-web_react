import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import Notification from '../Notifications/Notifications'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import CourseList from '../CourseList/CourseList';
describe('Test App.js', () => {
  it('App without crashing', (done) => {
    expect(shallow(<App />).exists());
    done();
  });
  it('Notification without crashing', (done) => {
    expect(shallow(<Notification />).exists());
    done();
  });
  it('Header without crashing', (done) => {
    expect(shallow(<Header />).exists());
    done();
  });
  it('Login without crashing', (done) => {
    expect(shallow(<Login />).exists());
    done();
  });
  it('Footer without crashing', (done) => {
    expect(shallow(<Footer />).exists());
    done();
  });
  it("<App /> doesn't contain <CourseList />", () => {
   const  wrapper = shallow(<App />);
   expect(wrapper.find(CourseList)).to.have.lengthOf(0);
	});
});
describe("Testing the <App /> when isLoggedIn is true", () => {

	let props = {
		isLoggedIn: true,
	};

	let component = shallow(<App {...props} />);

	expect(component.contains(<Login />)).to.equal(false);
	expect(component.contains(<CourseList />)).to.equal(true);
});