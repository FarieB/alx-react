import { createSelector } from 'reselect';

/**
 * Selector to get the current filter type.
 * @param {Object} state - The Redux state.
 * @returns {string} - The filter type (e.g., "DEFAULT", "URGENT").
 */
export const filterTypeSelected = (state) => state.notifications.filter;

/**
 * Selector to get the list of notifications in the state.
 * @param {Object} state - The Redux state.
 * @returns {Map} - A Map of notifications.
 */
export const getNotifications = (state) => state.notifications.notifications;

/**
 * Selector to get the list of unread notifications.
 * @param {Object} state - The Redux state.
 * @returns {Map} - A Map of unread notifications.
 */
export const getUnreadNotifications = createSelector(
  [getNotifications],
  (notifications) => notifications.filter((notification) => !notification.isRead)
);
