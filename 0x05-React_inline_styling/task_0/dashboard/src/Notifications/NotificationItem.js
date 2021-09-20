import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class NotificationItem extends PureComponent {
    render() {
        const {type, html, value, markAsRead, idx} = this.props;
        return html ? (
            <li 
                dangerouslySetInnerHTML={{__html: html.__html}}
                data-priority={type}
                onClick={() => {markAsRead(idx)}}>
            </li>
        ) : (
            <li 
                data-priority={type}
                onClick={() => {markAsRead(idx)}}>
                {value}
            </li>
        );
    }
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    markAsRead: PropTypes.func,
    idx: PropTypes.number.isRequired
}
  
NotificationItem.defaultProps = {
    type: "default",
}

export default NotificationItem;