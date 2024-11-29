import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";
import { AppContext } from "../AppContext"; // Import the context
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Header", () => {
  it("render without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("should render a h1", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists("img")).toEqual(true);
    expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
  });

  it("should not render the logoutSection with default context value (user is not logged in)", () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: false, email: "" }, logOut: jest.fn() }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find(".logoutSection").exists()).toEqual(false);
  });

  it("should render the logoutSection when user is logged in", () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: "test@example.com" }, logOut: jest.fn() }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find(".logoutSection").exists()).toEqual(true);
  });

  it("should call the logOut function when the logout link is clicked", () => {
    const logOutSpy = jest.fn();
    const wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: "test@example.com" }, logOut: logOutSpy }}>
        <Header />
      </AppContext.Provider>
    );

    wrapper.find(".logoutLink").simulate("click");
    expect(logOutSpy).toHaveBeenCalledTimes(1);
  });
});
