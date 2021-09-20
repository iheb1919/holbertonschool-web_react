import React, { Component, Fragment } from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
	constructor(props) {
		super(props);
		this.markAsRead = this.markAsRead.bind(this);
		
	}
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.listNotifications.length !== nextState.listNotifications.length;
	};
	markAsRead(id) {
		
		console.log(`Notification ${id} has been marked as read`);
	};
	render(){
		let {
		displayDrawer,
		listNotifications
	} = this.props;
	return (
		<div className="a">
		
		{
		displayDrawer &&
		<div className="Notifications">
			
			<button
				style={{
					color: '#3a3a3a',
					fontWeight: 'bold',
					background: 'none',
					border: 'none',
					fontSize: '15px',
					position: 'absolute',
					right: '3px',
					top: '3px',
					cursor: 'pointer',
					outline: 'none',
				}}
				aria-label="Close"
				onClick={() => alert("o")}
				>
				<img src={closeIcon} alt="close icon" />
			</button>
			{
							listNotifications.length === 0 &&
							<p>No new notification for now</p>
						}
						{
							listNotifications.length > 0 &&
							<Fragment>
								<p>
									Here is the list of notifications
								</p>
								<ul>
									{	
										listNotifications.map((notifaction) => {
											return (
												<NotificationItem
													key={notifaction.id}
													type={notifaction.type}
													value={notifaction.value}
													html={notifaction.html}
												/>
											)
										})
									}
								</ul>
							</Fragment>
						}
				
		</div>
	}
			</div>
	);
}
};
Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
	displayDrawer: true,
	listNotifications: [],
};
export default Notifications;