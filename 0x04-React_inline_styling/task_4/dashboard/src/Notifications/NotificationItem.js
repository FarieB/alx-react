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
    fontSize: "20px",        // Set font size to 20px
    padding: "10px 8px",     // Set padding to 10px 8px
    width: "100%",           // Make the item take the full width
    borderBottom: "1px solid black", // Black border at the bottom
  },

  urgent: {
    fontSize: "20px",        // Set font size to 20px
    padding: "10px 8px",     // Set padding to 10px 8px
    width: "100%",           // Make the item take the full width
    borderBottom: "1px solid black", // Black border at the bottom
    color: "red",            // Urgent notifications in red
  },
});

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: { __html: "" },
  markAsRead: () => {},
  id: 0,
};

export default NotificationItem;
