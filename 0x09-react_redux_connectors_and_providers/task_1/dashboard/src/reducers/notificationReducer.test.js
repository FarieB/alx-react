import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { Map } from 'immutable';

describe('notificationReducer', () => {
  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'Notification 1' },
        { id: 2, type: 'urgent', value: 'Notification 2' },
      ],
    };
    const state = notificationReducer(undefined, action).toJS();
    expect(state.notifications).toEqual({
      1: { id: 1, type: 'default', value: 'Notification 1', isRead: false },
      2: { id: 2, type: 'urgent', value: 'Notification 2', isRead: false },
    });
  });

  it('should handle MARK_AS_READ', () => {
    const initialState = Map({
      filter: 'DEFAULT',
      notifications: Map({
        1: { id: 1, isRead: false },
      }),
    });
    const action = { type: MARK_AS_READ, index: 1 };
    const state = notificationReducer(initialState, action).toJS();
    expect(state.notifications[1].isRead).toBe(true);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const initialState = Map({ filter: 'DEFAULT' });
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const state = notificationReducer(initialState, action).toJS();
    expect(state.filter).toBe('URGENT');
  });
});
