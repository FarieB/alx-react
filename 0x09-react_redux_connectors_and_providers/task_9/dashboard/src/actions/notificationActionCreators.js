import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS,
} from "./notificationActionTypes";

export const markAsAread = (index) => {
  if (typeof index !== "number") {
    throw new Error("Index must be a number.");
  }
  return {
    type: MARK_AS_READ,
    index,
  };
};

export const boundMarkAsAread = (index) => (dispatch) => {
  dispatch(markAsAread(index));
};

export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
};

export const boundSetNotificationFilter = (filter) => (dispatch) => {
  dispatch(setNotificationFilter(filter));
};

export const setLoadingState = (loading) => {
  if (typeof loading !== "boolean") {
    throw new Error("Loading state must be a boolean.");
  }
  return {
    type: SET_LOADING_STATE,
    loading,
  };
};

export const setNotifications = (data) => {
  if (!Array.isArray(data)) {
    throw new Error("Notifications data must be an array.");
  }
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data,
  };
};

// Refactored to use async/await for better readability
export const fetchNotifications = () => {
  return async (dispatch) => {
    dispatch(setLoadingState(true));
    try {
      const response = await fetch("./notifications.json");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      dispatch(setNotifications(data));
    } catch (error) {
      console.error("Error fetching notifications:", error);
      // Optionally, you could dispatch an error-handling action here
    } finally {
      dispatch(setLoadingState(false));
    }
  };
};
