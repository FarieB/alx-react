import { Map } from "immutable";
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../actions/uiActionTypes";

export const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: null,
};

const uiReducer = (state = Map(initialState), action) => {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", true);

    case HIDE_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", false);

    case LOGIN_SUCCESS:
      return state.set("isUserLoggedIn", true);

    case LOGIN_FAILURE:
      return state.set("isUserLoggedIn", false);

    case LOGIN:
      // When the LOGIN action is received, update the user in the state
      return state.set("isUserLoggedIn", true).set("user", action.user);

    case LOGOUT:
      // When LOGOUT action is received, reset the user to null and set isUserLoggedIn to false
      return state.set("isUserLoggedIn", false).set("user", null);

    default:
      return state;
  }
};

export default uiReducer;
