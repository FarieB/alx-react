import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

/**
 * Action creator for marking a notification as read.
 * @param {number} index - The index of the notification to mark as read.
 * @returns {Object} - Action object with type MARK_AS_READ and the index.
 */
export const markAsAread = (index) => ({
  type: MARK_AS_READ,
  index,
});

/**
 * Action creator for setting a notification filter.
 * @param {string} filter - The filter to set (DEFAULT or URGENT).
 * @returns {Object} - Action object with type SET_TYPE_FILTER and the filter.
 */
export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});
