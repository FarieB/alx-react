import { bindActionCreators } from 'redux';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

/**
 * Action creators for selecting and unselecting courses.
 */
export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});

/**
 * Bound action creators.
 */
export const boundCourseActions = (dispatch) => 
  bindActionCreators(
    {
      selectCourse,
      unSelectCourse,
    },
    dispatch
  );
