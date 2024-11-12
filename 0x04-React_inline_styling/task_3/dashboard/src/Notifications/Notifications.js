import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <React.Fragment>
        <div className={css(styles.menuItem)}>
          <p>Your notifications</p>
        </div>
        {this.props.displayDrawer ? (
          <div className={css(styles.Notifications)}>
            <button
              style={{
                color: "#3a3a3a",
                fontWeight: "bold",
                background: "none",
                border: "none",
                fontSize: "15px",
                position: "absolute",
                right: "3px",
                top: "3px",
                cursor: "pointer",
                outline: "none",
              }}
              aria-label="Close"
              onClick={(e) => {
                console.log("Close button has been clicked");
              }}
            >
              <img src={closeIcon} alt="close icon" width="10px" />
            </button>
            {this.props.listNotifications.length !== 0 ? <p>Here is the list of notifications</p> : null}
            <ul className={css(styles.notificationList)}>
              {this.props.listNotifications.length === 0 ? (
                <NotificationItem type="default" value="No new notification for now" />
              ) : null}
              {this.props.listNotifications.map((val, idx) => {
                return (
                  <NotificationItem
                    type={val.type}
                    value={val.value}
                    html={val.html}
                    key={val.id}
                    markAsRead={this.markAsRead}
                    id={val.id}
                  />
                );
              })}
            </ul>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  Notifications: {
    padding: 0, // No padding for the entire notification panel
    border: "2px dashed red",
    position: "fixed", // Use fixed to make it occupy the entire screen
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#fff",
    zIndex: 999, // Ensure it is above other elements
    fontSize: "20px", // Set the font size to 20px
  },

  notificationList: {
    padding: 0, // Remove padding from the ul element
    margin: 0, // Ensure no margin on the ul
    listStyle: "none", // Remove the default list styling
  },

  "notification-header": {
    display: "flex",
    justifyContent: "space-between",
  },

  menuItem: {
    textAlign: "right",
  },

  '[data-notification-type="default"]': {
    color: "blue",
  },

  "[data-urgent]": {
    color: "red",
  },

  '[data-notification-type="urgent"]': {
    color: "red",
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
