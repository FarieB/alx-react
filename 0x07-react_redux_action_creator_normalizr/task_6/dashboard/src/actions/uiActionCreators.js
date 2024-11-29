import { bindActionCreators } from 'redux';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

/**
 * Action creators for UI actions.
 */
export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password },
});

export const logout = () => ({
  type: LOGOUT,
});

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

/**
 * Bound action creators.
 */
export const boundUIActions = (dispatch) =>
  bindActionCreators(
    {
      login,
      logout,
      displayNotificationDrawer,
      hideNotificationDrawer,
    },
    dispatch
  );
