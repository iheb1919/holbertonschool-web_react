import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { StyleSheet, css } from 'aphrodite';
const med = {borderBottom: "1px solid black",
padding:'10px 8px'

}
const styles = StyleSheet.create({
    Default: {
        color: "blue",
        "@media(max-width: 600px)": med
    },
    
    Urgent: {
        color: "red",
        "@media(max-width: 600px)": med
    },
})
class NotificationItem extends PureComponent {
 
    render() {
        const {type, html, value, markAsRead, idx} = this.props;
        return html ? (
            <li 
                dangerouslySetInnerHTML={{__html: html.__html}}
                data-priority={type}
                onClick={() => {markAsRead(idx)}}
                className={type === "default" ? css(styles.Default) : css(styles.Urgent)}>
            </li>
        ) : (
            <li 
                data-priority={type}
                onClick={() => {markAsRead(idx)}}
                className={type === "default" ? css(styles.Default) : css(styles.Urgent)}>
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