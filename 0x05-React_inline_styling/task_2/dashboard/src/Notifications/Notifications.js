import React, { Component } from 'react';
import closeIcon from '../assets/cancel.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css} from 'aphrodite';

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
        border: '2px dotted #e0354b',
    },
    menuItem:{
        fontSize: '20px',
        width: 'fit-content',
        marginLeft: 'auto',
        '@media(max-width:600px)':{
            marginLeft: '0',
            
        },
    },
    

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
                    <div className="menuItem">
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
                    <div className={css(style.menuItem)}>
                        <p>Your notifications</p>
                    </div>
                    { this.state.displayDrawer && <div className="Notifications">
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
    displayDrawer: true,
    listNotifications: []
}

export default Notifications;