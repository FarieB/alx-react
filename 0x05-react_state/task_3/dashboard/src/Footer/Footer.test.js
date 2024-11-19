import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { AppContext } from '../AppContext'; // Import the AppContext

describe("Testing <Footer /> component", () => {
  let wrapper;

  it("Footer Component renders without crashing", () => {
    wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it("Footer component renders at least the text 'Copyright'", () => {
    wrapper = shallow(<Footer />);
    expect(wrapper.text().includes("Copyright")).toBe(true);
  });

  it("Footer should not display 'Contact us' when user is logged out", () => {
    // Simulate user logged out by providing a context with user logged out
    wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').exists()).toBe(false); // Ensure 'Contact us' is not displayed
  });

  it("Footer should display 'Contact us' when user is logged in", () => {
    // Simulate user logged in by providing a context with user logged in
    wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'user@example.com' } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').exists()).toBe(true); // Ensure 'Contact us' is displayed
  });
});
