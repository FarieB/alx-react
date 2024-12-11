import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

// Synchronous action creators
export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password },
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

// Asynchronous action creator
export const loginRequest = (email, password) => {
  return async (dispatch) => {
    dispatch(login(email, password));

    try {
      const response = await fetch('/login-success.json');
      if (response.ok) {
        dispatch(loginSuccess());
      } else {
        throw new Error('Failed to log in');
      }
    } catch (error) {
      dispatch(loginFailure());
    }
  };
};
