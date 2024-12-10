import { schema } from 'normalizr';

export const course = new schema.Entity('courses');
export const coursesList = [course];

export const coursesNormalizer = (data) => {
  return normalize(data, coursesList).entities.courses;
};
