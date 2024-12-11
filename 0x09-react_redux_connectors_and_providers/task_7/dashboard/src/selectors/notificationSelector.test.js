import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Selectors', () => {
  const state = {
    notifications: {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
    },
  };

  it('should return the correct filter type', () => {
    const filter = filterTypeSelected(state);
    expect(filter).toBe('DEFAULT');
  });

  it('should return the list of notifications', () => {
    const notifications = getNotifications(state);
    expect(notifications).toEqual([
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
      { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    ]);
  });

  it('should return the list of unread notifications', () => {
    const unreadNotifications = getUnreadNotifications(state);
    expect(unreadNotifications).toEqual([
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    ]);
  });
});
