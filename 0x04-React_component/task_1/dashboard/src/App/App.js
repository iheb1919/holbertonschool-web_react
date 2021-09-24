import './App.css';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Notifications from '../Notifications/Notifications.js';
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.ctrlHEventHandler = this.ctrlHEventHandler.bind(this);
  }
  ctrlHEventHandler(e) {
    let k = e.key;
    if ((e.metaKey || e.ctrlKey) && k === 'h') {
      e.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  };
  handleKeyPressDown() {
    document.addEventListener("keydown", this.ctrlHEventHandler, false);
  };

  componentDidMount() {
    this.handleKeyPressDown();
  };

  componentWillUnmount() {
    document.removeEventListener("keydown", this.ctrlHEventHandler, false);
  };
  render(){
  let {
    isLoggedIn,
  } = this.props;
  let listNotifications = [
    {
      id: 1,
      type: "default",
      value: "New course available",
    },
    {
      id: 2,
      type: "urgent",
      value: "New resume available",
    },
    {
      id: 3,
      type: "urgent",
      html: {__html: getLatestNotification()},
    }
  ];
  let listCourses = [
    {
      id: 1,
      name: "ES6",
      credit: 60,
    },
    {
      id: 2,
      name: "Webpack",
      credit: 20,
    },
    {
      id: 3,
      name: "React",
      credit: 40,
    },
  ];
  
  return (
    <Fragment>
      <Notifications listNotifications={listNotifications} />
      <div className="App">
        <Header />
        {
            isLoggedIn === false &&
            <Login />
          }
          {
            isLoggedIn === true &&
            <CourseList listCourses={listCourses} />
          }
        <Footer />
      </div>
    </Fragment>
 
  );
}
}

App.propTypes = {
  logOut: PropTypes.func,
};
App.defaultProps = {
  isLoggedIn: true,
  logOut: () => {}
};
export default App;