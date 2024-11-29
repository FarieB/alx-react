import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

/**
 * Action creator to select a course.
 * @param {number} index - The index of the course to select.
 * @returns {Object} - Action object with type SELECT_COURSE and the index.
 */
export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

/**
 * Action creator to unselect a course.
 * @param {number} index - The index of the course to unselect.
 * @returns {Object} - Action object with type UNSELECT_COURSE and the index.
 */
export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});
