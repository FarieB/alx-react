import React from "react";
import { fromJS } from "immutable";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App, { mapStateToProps } from "./App";
import uiReducer, { initialState } from "../reducers/uiReducer";

// Create a store for potential use in other tests
const store = createStore(uiReducer, initialState);

describe("<App />", () => {
  it("mapStateToProps returns the correct object from user Login", () => {
    // Mock state using Immutable.js
    const state = fromJS({
      isUserLoggedIn: true,
    });

    // Call mapStateToProps
    const result = mapStateToProps(state);

    // Verify the returned object
    expect(result).toEqual({ isLoggedIn: true });
  });
});
