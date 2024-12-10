import { bindActionCreators } from 'redux';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

/**
 * Action creators for notifications.
 */
export const markAsAread = (index) => ({
  type: MARK_AS_READ,
  index,
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});

/**
 * Bound action creators.
 */
export const boundNotificationActions = (dispatch) =>
  bindActionCreators(
    {
      markAsAread,
      setNotificationFilter,
    },
    dispatch
  );
