// notifications.test.js
import React from 'react';
import { shallow } from 'enzyme';
import { Notifications } from './notifications';
import NotificationItem from './NotificationItem';

const mockMarkAsRead = jest.fn();

describe('Notifications Component', () => {
  let wrapper;
  const listNotifications = [
    {
      guid: '1',
      type: 'default',
      value: 'New course available',
    },
    {
      guid: '2',
      type: 'urgent',
      value: 'New resume available',
    },
    {
      guid: '3',
      type: 'urgent',
      html: { __html: '<strong>Urgent requirement</strong>' },
    },
  ];

  beforeEach(() => {
    wrapper = shallow(
      <Notifications
        listNotifications={listNotifications}
        markNotificationAsRead={mockMarkAsRead}
      />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a list of notifications', () => {
    expect(wrapper.find(NotificationItem)).toHaveLength(listNotifications.length);
  });

  it('passes the correct props to NotificationItem components', () => {
    wrapper.find(NotificationItem).forEach((item, index) => {
      const notification = listNotifications[index];
      expect(item.prop('id')).toBe(notification.guid);
      expect(item.prop('type')).toBe(notification.type);
      expect(item.prop('value')).toBe(notification.value);
      expect(item.prop('html')).toEqual(notification.html);
    });
  });

  it('renders the close button and handles click event', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const closeButton = wrapper.find('button');
    expect(closeButton).toHaveLength(1);
    closeButton.simulate('click');
    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');
    consoleSpy.mockRestore();
  });

  it('calls markNotificationAsRead when markAsRead is triggered', () => {
    const firstNotification = wrapper.find(NotificationItem).at(0);
    firstNotification.prop('markAsRead')();
    expect(mockMarkAsRead).toHaveBeenCalledWith(listNotifications[0].guid);
  });
});
