import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe("Testing <NotificationItem />", () => {
  let wrapper;

  it("<NotificationItem /> renders without crashing", () => {
    wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it("<NotificationItem /> renders the correct html by passing dummy type and value props", () => {
    wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find("li").text()).toBe("test");
    expect(wrapper.find("li").prop("data-notification-type")).toBe("default");

    // Check if the 'default' class (styling) is applied correctly
    expect(wrapper.find("li").hasClass('default')).toBe(true);
  });

  it("<NotificationItem /> renders the correct html by passing a dummy html prop", () => {
    wrapper = shallow(<NotificationItem html={{__html: "<u>test</u>"}} />);
    expect(wrapper.find("li").html()).toBe('<li data-notification-type="default"><u>test</u></li>');
  });

  it("<NotificationItem /> applies correct styles for 'urgent' type", () => {
    wrapper = shallow(<NotificationItem type="urgent" value="urgent test" />);
    expect(wrapper.find("li").hasClass('urgent')).toBe(true);
  });
});
