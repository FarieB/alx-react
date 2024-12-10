import { shallow } from "enzyme";
import React from "react";
import App, { mapStateToProps } from "./App";
import { fromJS } from "immutable";
import { createStore } from "redux";
import { Provider } from "react-redux";
import uiReducer, { initialState } from "../reducers/uiReducer";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

const store = createStore(uiReducer, initialState);

describe("<App />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  describe("mapStateToProps", () => {
    it("returns the correct value for `isLoggedIn`", () => {
      const state = fromJS({
        isUserLoggedIn: true,
        isNotificationDrawerVisible: false,
      });

      const result = mapStateToProps(state);

      expect(result).toEqual({ isLoggedIn: true, displayDrawer: false });
    });

    it("returns the correct value for `displayDrawer`", () => {
      const state = fromJS({
        isUserLoggedIn: false,
        isNotificationDrawerVisible: true,
      });

      const result = mapStateToProps(state);

      expect(result).toEqual({ isLoggedIn: false, displayDrawer: true });
    });
  });
});
