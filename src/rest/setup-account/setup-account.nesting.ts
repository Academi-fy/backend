import { schoolRawNesting } from '../school';

export const setupAccountNesting = {
  school: {
    include: {
      ...schoolRawNesting,
    },
  },
};
