import { combineReducers } from "redux";
import courseReducer, { initialCourseState } from "./courseReducer";
import notificationReducer, { initialNotificationState } from "./notificationReducer";
import uiReducer, { initialState as initialUiState } from "./uiReducer";
import { Map } from "immutable";

// Initial state for the entire store
export const initialState = {
  courses: Map(initialCourseState),
  notifications: Map(initialNotificationState),
  ui: Map(initialUiState),
};

// Combine reducers into a single root reducer
const rootReducer = combineReducers({
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
});

export default rootReducer;
