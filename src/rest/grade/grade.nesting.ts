import { classRawNesting } from '../class';

export const gradeRawNesting = {
  classes: true,
  school: false,
} as const;

export const gradeNesting = {
  classes: {
    include: {
      ...classRawNesting,
    },
  },
  school: false,
} as const;
