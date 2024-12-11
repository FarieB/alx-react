import { Map, fromJS } from "immutable";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
} from "../actions/notificationActionTypes";

import notificationsNormalizer from "../schema/notifications";

export const initialNotificationState = {
  notifications: Map(),
  filter: "DEFAULT",
  loading: false,
};

const notificationReducer = (state = Map(initialNotificationState), action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const normalizedData = notificationsNormalizer(action.data);

      const updatedNotifications = Object.keys(normalizedData.notifications).reduce(
        (acc, key) => {
          acc[key] = { ...normalizedData.notifications[key], isRead: false };
          return acc;
        },
        {}
      );

      return state.mergeDeep({
        notifications: fromJS(updatedNotifications),
      });
    }

    case MARK_AS_READ:
      return state.setIn(["notifications", String(action.index), "isRead"], true);

    case SET_TYPE_FILTER:
      return state.set("filter", action.filter);

    case SET_LOADING_STATE:
      return state.set("loading", action.loading);

    default:
      return state;
  }
};

export default notificationReducer;
