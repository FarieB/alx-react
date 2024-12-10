import rootReducer, { initialState } from "./rootReducer";
import { combineReducers } from "redux";
import { Map } from "immutable";

describe("rootReducer tests", () => {
  it("verifies the initial state of the rootReducer", () => {
    const expectedState = {
      courses: Map({}),
      notifications: Map({}),
      ui: Map({}),
    };

    const combinedReducer = combineReducers(rootReducer);

    const state = combinedReducer(undefined, { type: "RANDOM_ACTION" });

    // Check if the structure matches the expected state
    expect(state.courses).toEqual(expectedState.courses);
    expect(state.notifications).toEqual(expectedState.notifications);
    expect(state.ui).toEqual(expectedState.ui);
  });
});
