import { courseRawNesting } from '../course';

export const subjectRawNesting = {
  courses: true,
  school: false,
} as const;

export const subjectNesting = {
  courses: {
    include: {
      ...courseRawNesting,
    },
  },
  school: false,
} as const;
