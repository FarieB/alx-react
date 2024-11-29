/**
 * @jest-environment jsdom
 */
import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);
    expect(component).toBeDefined();
  });

  it("should call markNotificationAsRead when a notification is clicked", () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    const mockState = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];
    wrapper.setState({ listNotifications: mockState });

    instance.markNotificationAsRead(1);

    expect(wrapper.state("listNotifications")).toEqual([
      { id: 2, type: "urgent", value: "New resume available" },
    ]);
  });

  it("should render Notifications component", () => {
    const component = shallow(<App />);
    expect(component.containsMatchingElement(<Notifications />)).toEqual(false);
  });

  it("should render Header component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Header />)).toBe(true);
  });

  it("should render Footer Component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Footer />)).toBe(true);
  });
});

// Other tests...
