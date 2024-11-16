import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Login Component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("should have 2 input tags and 2 label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("label")).toHaveLength(2);
    expect(wrapper.find("input[type='email']")).toHaveLength(1);
    expect(wrapper.find("input[type='password']")).toHaveLength(1);
  });

  it("should disable the submit button by default", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input[type='submit']").prop("disabled")).toEqual(true);
  });

  it("should enable the submit button when email and password are not empty", () => {
    const wrapper = shallow(<Login />);
    wrapper.find("input[type='email']").simulate("change", { target: { value: "test@test.com" } });
    wrapper.find("input[type='password']").simulate("change", { target: { value: "password" } });
    expect(wrapper.find("input[type='submit']").prop("disabled")).toEqual(false);
  });

  it("should call handleLoginSubmit on form submit", () => {
    const wrapper = shallow(<Login />);
    const handleLoginSubmitMock = jest.fn();
    wrapper.instance().handleLoginSubmit = handleLoginSubmitMock;
    wrapper.instance().forceUpdate(); // Ensure updated function is used
    wrapper.find("form").simulate("submit", { preventDefault: jest.fn() });
    expect(handleLoginSubmitMock).toHaveBeenCalled();
  });
});
