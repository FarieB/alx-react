import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, value, html, markAsRead, id } = this.props;

    // Conditionally apply styles based on notification type
    const notificationClass = type === 'urgent' ? styles.urgent : styles.default;

    return (
      value ? (
        <li
          data-notification-type={type}
          className={css(notificationClass)}
          onClick={() => markAsRead(id)}
        >
          {value}
        </li>
      ) : (
        <li
          data-notification-type={type}
          dangerouslySetInnerHTML={html}
          className={css(notificationClass)}
          onClick={() => { console.log('empty func'); }}
        ></li>
      )
    );
  }
}

const styles = StyleSheet.create({
  default: {
    color: 'blue',
    fontSize: '20px', // Set font size to 20px
    width: '100%', // Take full screen width
    padding: '10px 8px', // Padding for the item
    borderBottom: '1px solid black', // Black border at the bottom
  },
  urgent: {
    color: '#e1484c', // Holberton red or urgent color
    fontSize: '20px', // Set font size to 20px
    width: '100%', // Take full screen width
    padding: '10px 8px', // Padding for the item
    borderBottom: '1px solid black', // Black border at the bottom
  }
});

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => { console.log('empty func'); },
  id: 0,
};

NotificationItem.propTypes = {
  html: PropTypes.shape({ __html: PropTypes.string }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number
};

export default NotificationItem;
