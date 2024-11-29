import React from 'react';
import { jest } from '@jest/globals';
import { shallow, mount } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';

describe("Testing the <Notifications /> Component", () => {
  let wrapper;
  const handleDisplayDrawerMock = jest.fn();
  const handleHideDrawerMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Notifications 
        handleDisplayDrawer={handleDisplayDrawerMock} 
        handleHideDrawer={handleHideDrawerMock} 
      />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("<Notifications /> is rendered without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("<Notifications /> renders NotificationItems", () => {
    wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('NotificationItem')).not.toHaveLength(0);
  });

  it("<Notifications /> render the text 'Here is the list of notifications'", () => {
    wrapper.setProps({
      displayDrawer: true,
      listNotifications: [{ id: 1, value: "New course available", type: "default" }],
    });
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toEqual(true);
  });

  it("verify that clicking on the menu item calls handleDisplayDrawer", () => {
    const menuItem = wrapper.find('.menuItem');
    menuItem.simulate('click');
    expect(handleDisplayDrawerMock).toHaveBeenCalledTimes(1);
  });

  it("verify that clicking on the button calls handleHideDrawer", () => {
    wrapper.setProps({ displayDrawer: true });
    const closeButton = wrapper.find('.Notifications button');
    closeButton.simulate('click');
    expect(handleHideDrawerMock).toHaveBeenCalledTimes(1);
  });
});
