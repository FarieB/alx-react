import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { Map } from 'immutable';

describe('courseReducer', () => {
  it('should handle FETCH_COURSE_SUCCESS', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
    };
    const state = courseReducer(undefined, action).toJS();
    expect(state).toEqual({
      1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
      2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      3: { id: 3, name: 'React', credit: 40, isSelected: false },
    });
  });

  it('should handle SELECT_COURSE', () => {
    const initialState = Map({
      1: { id: 1, isSelected: false },
    });
    const action = { type: SELECT_COURSE, index: 1 };
    const state = courseReducer(initialState, action).toJS();
    expect(state[1].isSelected).toBe(true);
  });

  it('should handle UNSELECT_COURSE', () => {
    const initialState = Map({
      1: { id: 1, isSelected: true },
    });
    const action = { type: UNSELECT_COURSE, index: 1 };
    const state = courseReducer(initialState, action).toJS();
    expect(state[1].isSelected).toBe(false);
  });
});
