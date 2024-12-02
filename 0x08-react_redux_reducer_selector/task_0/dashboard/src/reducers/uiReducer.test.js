import uiReducer, { initialState } from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should return the initial state when an unknown action is passed', () => {
    const state = uiReducer(undefined, { type: 'UNKNOWN_ACTION' });
    expect(state).toEqual(initialState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER action', () => {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
    });
  });

  it('should handle HIDE_NOTIFICATION_DRAWER action', () => {
    const initialStateWithDrawerVisible = {
      ...initialState,
      isNotificationDrawerVisible: true,
    };
    const state = uiReducer(initialStateWithDrawerVisible, { type: HIDE_NOTIFICATION_DRAWER });
    expect(state).toEqual({
      ...initialState,
      isNotificationDrawerVisible: false,
    });
  });

  it('should handle LOGIN_SUCCESS action', () => {
    const state = uiReducer(undefined, { type: LOGIN_SUCCESS });
    expect(state).toEqual({
      ...initialState,
      isUserLoggedIn: true,
    });
  });

  it('should handle LOGIN_FAILURE action', () => {
    const initialStateWithUserLoggedIn = {
      ...initialState,
      isUserLoggedIn: true,
    };
    const state = uiReducer(initialStateWithUserLoggedIn, { type: LOGIN_FAILURE });
    expect(state).toEqual({
      ...initialState,
      isUserLoggedIn: false,
    });
  });

  it('should handle LOGOUT action', () => {
    const initialStateWithUserLoggedIn = {
      ...initialState,
      isUserLoggedIn: true,
    };
    const state = uiReducer(initialStateWithUserLoggedIn, { type: LOGOUT });
    expect(state).toEqual({
      ...initialState,
      isUserLoggedIn: false,
    });
  });
});
