import React from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css} from 'aphrodite';
import AppContext from './AppContext';

const styles = StyleSheet.create({
  App: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    
  },
  
  courselist:{
    width: '80%',
    margin: '0 auto',
    marginTop: '20px',
    border: '2px solid rgba(0, 0, 0, 0.2)',
  },
  
  div:{
    
    borderBottom: "3px solid #e0354b",
    display:'flex',
    flexDirection:'row',
    clear: 'both',
    '@media(max-width: 600px)':{
      display: 'flex',
      alignItems: "center",
      flexDirection: 'column',
    }
  },
  NotificationContainer:{

  }

})
const listCourses = [
  {id: 1, name: "ES6", credit: 60},
  {id: 2, name: "Webpack", credit: 20},
  {id: 3, name: "React", credit: 40}
]

const listNotifications = [
  {id: 1, type: "default", value: "New course available"},
  {id: 2, type: "urgent", value: "New resume available"},
  {id: 3, type: "urgent", __html: {__html: getLatestNotification()}},
]
const user = {
  email: "",
  password: "",
  isLoggedIn: false
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: props.isLoggedIn || false,
      displayDrawer:false,
      user:user,
      logOut: () => this.logOut(),
      listNotifications: listNotifications
    }
    this.logOut = this.logOut.bind(this);
    this.logIn = this.logIn.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }
  logIn(email, password) {
    console.log("eee")
    
    this.setState({user: {
      email,
      password,
      isLoggedIn: true
    }})
    
  }
  logOut(){
    console.log("eefffffe")
    this.setState({user:{
      email:"",
      password:"",
      isLoggedIn: false
    }})
  }
  handleDisplayDrawer() {
    this.setState({
      displayDrawer: true
    });
  };
  handleHideDrawer() {
    this.setState({
      displayDrawer: false
    });
  };

  handleKeyDown(e) {
    if (e.ctrlKey && e.code == "KeyH") {
      //e.preventDefault()
      alert("Logging you out");
      this.logOut();
      
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  markNotificationAsRead(id){
    const updatedNotifications = this.state.listNotifications.filter((notif) => {
      return notif.id !== id;
    });

    this.setState({
      listNotifications: updatedNotifications,
    });
  }
  render() {
    let {
      user,
      logOut,
      
    } = this.state;
    return (
      <AppContext.Provider value={{user, logOut}}>
      <React.Fragment>
{/*          <Notifications listNotifications={listNotifications}/>
 */}        <div className={css(styles.App)}>
          <div className={css(styles.div)}>
          
          <Notifications className={css(styles.NotificationContainer)}
          listNotifications={this.state.listNotifications} 
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
          />
          <Header  />
          </div>
          { this.state.user.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList className={css(styles.courselist)} listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.logIn}/>
            </BodySectionWithMarginBottom>
          )
          }
          <BodySection title="News from the school">
            <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti 
            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
            </p>
          </BodySection>
          <Footer />
        </div>
      </React.Fragment>
      </AppContext.Provider>
    )
  }
}

/* App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {
    return
  }
} */

export default App;