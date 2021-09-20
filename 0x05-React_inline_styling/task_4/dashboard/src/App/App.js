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

const styles = StyleSheet.create({
  App: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    
  },
  header:{
    order:'-1',
    paddingTop:"50px",
    height:'200px',
    ":nth-child(1n) > img":{
      width: "200px",
      height: "200px",
    
      '@media (max-width: 900px)':{
        width: "100px",
        height: "100px",
      }
    },
    ":nth-child(2n)>h1":{
      width:""
    },
    display: "flex",
    alignItems: "center",
    color: "#e0354b",
    fontBize: "1.5rem",
    fontWeight: "bold",
    height: "25%",
    
  },
  courselist:{
    width: '80%',
    margin: '0 auto',
    marginTop: '20px',
    border: '2px solid rgba(0, 0, 0, 0.2)',
  },
  footer: {
    ":nth-child(1n) > p":{
      margin: "0",
    },
    height: "5%",
    borderTop: "3px solid #e0354b",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.2rem",
    fontWeight: "500"
    
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

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: props.isLoggedIn || false,
    }
    this.logOut = props.logOut;
  }

  handleKeyDown(e) {
    if (e.ctrlKey && e.code == "KeyH") {
      e.preventDefault()
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

  render() {
    return (
      <React.Fragment>
{/*          <Notifications listNotifications={listNotifications}/>
 */}        <div className={css(styles.App)}>
          <div className={css(styles.div)}>
          
          <Notifications listNotifications={listNotifications}/>
          <Header className={css(styles.header)} />
          </div>
          { this.state.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList className={css(styles.courselist)} listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )
          }
          <BodySection title="News from the school">
            <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti 
            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
            </p>
          </BodySection>
          <Footer className={css(styles.footer)} />
        </div>
      </React.Fragment>
    )
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {
    return
  }
}

export default App;