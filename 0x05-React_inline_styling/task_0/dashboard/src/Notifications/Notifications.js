import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/cancel.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

const buttonStyle = {
    position: 'relative',
    float: 'right',
    backgroundColor: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem'
}

class Notifications extends React.PureComponent {

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
                <div className="NotificationContainer">
                    <div className="menuItem">
                        <p>Your notifications</p>
                    </div>
                    {this.state.displayDrawer && <div className="Notifications">
                        <p>No new notification for now</p>
                    </div>}
                </div>
            )
        } else {
            return (
                <div className="NotificationContainer">
                    <div className="menuItem">
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
    displayDrawer: false,
    listNotifications: []
}

export default Notifications;