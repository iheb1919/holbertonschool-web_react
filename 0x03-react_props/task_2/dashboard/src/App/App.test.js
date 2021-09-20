import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import Notification from '../Notifications/Notifications'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
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
});