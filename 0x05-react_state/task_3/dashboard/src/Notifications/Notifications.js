import React, { PureComponent } from "react";
import { StyleSheet, css } from "aphrodite";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends PureComponent {
  render() {
    const { displayDrawer, listNotifications, markNotificationAsRead } = this.props;

    return (
      <React.Fragment>
        <div className={css(styles.menuItem)}>
          <p>Your notifications</p>
        </div>
        {displayDrawer ? (
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
            {listNotifications.length !== 0 ? <p>Here is the list of notifications</p> : null}
            <ul className={css(styles.notificationList)}>
              {listNotifications.length === 0 ? (
                <NotificationItem type="default" value="No new notification for now" />
              ) : null}
              {listNotifications.map((val) => (
                <NotificationItem
                  type={val.type}
                  value={val.value}
                  html={val.html}
                  key={val.id}
                  markAsRead={markNotificationAsRead}
                  id={val.id}
                />
              ))}
            </ul>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  Notifications: {
    padding: 0,
    border: "2px dashed red",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#fff",
    zIndex: 999,
    fontSize: "20px",
  },

  notificationList: {
    padding: 0,
    margin: 0,
    listStyle: "none",
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
  markNotificationAsRead: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  markNotificationAsRead: (id) => console.log(`Notification ${id} has been marked as read`),
};

export default Notifications;
