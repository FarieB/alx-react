import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

/**
 * Action creator for logging in a user.
 * @param {string} email - User's email.
 * @param {string} password - User's password.
 * @returns {Object} - Action object for login.
 */
export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password },
});

/**
 * Action creator for logging out a user.
 * @returns {Object} - Action object for logout.
 */
export const logout = () => ({
  type: LOGOUT,
});

/**
 * Action creator for displaying the notification drawer.
 * @returns {Object} - Action object to display the notification drawer.
 */
export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

/**
 * Action creator for hiding the notification drawer.
 * @returns {Object} - Action object to hide the notification drawer.
 */
export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});
