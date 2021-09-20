import React, { Component } from 'react';
import closeIcon from '../assets/cancel.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css} from 'aphrodite';
const opacit = {
    'from': {
      opacity: 0.5,
    },
  
    'to': {
        opacity: 1,
    }
  };
  
  const translate = {
    '0%': {
        transform: 'translateY(0)',
    },
  
    '50%': {
        transform: 'translateY(-5px)',
    },
    '75%': {
      transform: 'translateY(5px)',
    },
    '100%': {
        transform: 'translateY(0)',
    },
  };
const buttonStyle = {
    position: 'relative',
    float: 'right',
    backgroundColor: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem'
}
const style = StyleSheet.create({
    NotificationContainer: {
        backgroundColor:'#fff8f8',
        width: 'fit-content',
        position: 'relative',
        float:'right',
        marginLeft: 'auto',
        '@media(max-width:600px)':{
            marginLeft: '0',
            order:'-1'
        },
    },
    Notifications:{
        padding: '1rem',
        border: '2px dotted black',
    },
    menuItem:{
        ':hover': {
            animationName: [opacit, translate],
            animationDuration: '1s, 0.5s',
            animationIterationCount: '3',
          },
        fontSize: '20px',
        width: 'fit-content',
        marginLeft: 'auto',
        cursor:'pointer', 
        '@media(max-width:600px)':{
            marginLeft: '0',
            
        },
    },
    hide:{
        display:'none'
    }
    

})
/* css(styles.global); */

class Notifications extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
            displayDrawer: props.displayDrawer,
            listNotifications: props.listNotifications
        }
        this.markAsRead = this.markAsRead.bind(this)
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.listNotifications.length !== nextState.listNotifications.length;
      }

    render() {
        if (this.state.listNotifications.length === 0) {
            return (
                <div className={css(style.NotificationContainer)}>
                    <div className={css(style.menuItem, this.props.displayDrawer ? style.hide: '')}>
                        <p>Your notifications</p>
                    </div>
                    {this.state.displayDrawer && <div className={css(style.Notifications)}>
                        <p>No new notification for now</p>
                    </div>}
                </div>
            )
        } else {
            return (
                <div className={css(style.NotificationContainer)}>
                    <div className={css(style.menuItem, this.props.displayDrawer ? style.hide: '')}>
                        <p>Your notifications</p>
                    </div>
                    { this.state.displayDrawer && <div className={css(style.Notifications)}>
                        <button style={buttonStyle} aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
                            <img src={closeIcon} alt='Close'></img>
                        </button>
                        <p>Here is the list of notifications</p>
                        <ul>
                            {this.state.listNotifications.map(notification => <NotificationItem 
                                key={notification.id}
                                idx={notification.id} 
                                type={notification.type} 
                                value={notification.value} 
                                html={notification.__html}
                                markAsRead={this.markAsRead}
                                />)}
                        </ul>
                    </div> }
                </div>
            )
        }
    }
} 

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
}
  
Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
}

export default Notifications;