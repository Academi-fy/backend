import { courseRawNesting } from '../course';
import { gradeRawNesting } from '../grade';
import { userRawNesting } from '../user';

export const classRawNesting = {
  courses: true,
  grade: true,
  members: true,
  school: false,
} as const;

export const classNesting = {
  courses: {
    include: {
      ...courseRawNesting,
    },
  },
  grade: {
    include: {
      ...gradeRawNesting,
    },
  },
  members: {
    include: {
      ...userRawNesting,
    },
  },
  school: false,
} as const;
