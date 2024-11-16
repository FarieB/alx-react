import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';

describe('Testing the <Login /> component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('Login component renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('Login component renders 2 input tags', () => {
    expect(wrapper.find('input[type="email"]')).toHaveLength(1);
    expect(wrapper.find('input[type="password"]')).toHaveLength(1);
  });

  it('Login component renders 2 label tags', () => {
    expect(wrapper.find('label')).toHaveLength(2);
  });

  it('Submit button is disabled by default', () => {
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('Submit button is enabled after entering email and password', () => {
    const emailInput = wrapper.find('input[type="email"]');
    const passwordInput = wrapper.find('input[type="password"]');
    const submitButton = wrapper.find('input[type="submit"]');

    // Simulate entering email and password
    emailInput.simulate('change', { target: { value: 'test@example.com' } });
    passwordInput.simulate('change', { target: { value: 'password123' } });

    // Recheck the submit button
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
  });

  it('handleLoginSubmit updates isLoggedIn to true and prevents default', () => {
    const form = wrapper.find('form');
    const preventDefault = jest.fn();

    // Simulate form submission
    form.simulate('submit', { preventDefault });

    // Check state and preventDefault call
    expect(preventDefault).toHaveBeenCalled();
    expect(wrapper.state('isLoggedIn')).toBe(true);
  });
});
