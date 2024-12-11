import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUnreadNotifications } from '../selectors/notificationSelector';
import { markAsAread } from '../actions/notificationActionCreators';
import NotificationItem from './NotificationItem';

export class Notifications extends React.Component {
  render() {
    const { listNotifications, markNotificationAsRead } = this.props;

    return (
      <div className="Notifications">
        <button
          style={{ float: 'right', background: 'none', border: 'none' }}
          aria-label="Close"
          onClick={() => console.log('Close button has been clicked')}
        >
          <img
            src="close-icon.png"
            alt="close-icon"
            style={{ height: '10px' }}
          />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          {listNotifications.map((notification) => (
            <NotificationItem
              key={notification.get('guid')}
              id={notification.get('guid')}
              type={notification.get('type')}
              value={notification.get('value')}
              html={notification.get('html')}
              markAsRead={() => markNotificationAsRead(notification.get('guid'))}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.object.isRequired,
  markNotificationAsRead: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  listNotifications: getUnreadNotifications(state),
});

const mapDispatchToProps = (dispatch) => ({
  markNotificationAsRead: (id) => dispatch(markAsAread(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
