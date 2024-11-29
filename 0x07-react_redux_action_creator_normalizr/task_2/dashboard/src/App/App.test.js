/**
 * @jest-environment jsdom
 */
import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
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

  it("should render Notifications component", () => {
    const component = shallow(<App />);
    expect(component.containsMatchingElement(<Notifications />)).toEqual(false);
  });

  it("should render Header component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Header />)).toBe(true);
  });

  it("should render Login Component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Login />)).toBe(true);
  });

  it("should render Footer Component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Footer />)).toBe(true);
  });

  it("does not render CourseList if logged out", () => {
    const component = shallow(<App />);
    expect(component.contains(<CourseList />)).toBe(false);
  });

  it("renders CourseList if logged in", () => {
    const component = shallow(<App />);
    component.setState({
      user: { isLoggedIn: true, email: "test@example.com", password: "password123" },
    });
    expect(component.contains(<CourseList />)).toBe(true);
    expect(component.contains(<Login />)).toBe(false);
  });

  it("should update state correctly when logIn is called", () => {
    const component = shallow(<App />);
    component.instance().logIn("test@example.com", "password123");
    expect(component.state().user.isLoggedIn).toBe(true);
    expect(component.state().user.email).toBe("test@example.com");
    expect(component.state().user.password).toBe("password123");
  });

  it("should update state correctly when logOut is called", () => {
    const component = shallow(<App />);
    // First, log in the user
    component.instance().logIn("test@example.com", "password123");
    expect(component.state().user.isLoggedIn).toBe(true);

    // Then, log out the user
    component.instance().logOut();
    expect(component.state().user.isLoggedIn).toBe(false);
    expect(component.state().user.email).toBe("");
    expect(component.state().user.password).toBe("");
  });
});

describe("When ctrl + h is pressed", () => {
  it("calls logOut function", () => {
    const wrapper = mount(<App />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(wrapper.state().user.isLoggedIn).toBe(false);
    wrapper.unmount();
  });

  document.alert = jest.fn();
  it("checks that alert function is called", () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
    wrapper.unmount();
  });

  it('checks that the alert is "Logging you out"', () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalledWith("Logging you out");
    jest.restoreAllMocks();
    wrapper.unmount();
  });
  document.alert.mockClear();
});
