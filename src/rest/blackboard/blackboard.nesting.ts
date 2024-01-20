import { userRawNesting } from '../user';
import { blackboardTagRawNesting } from '../blackboard-tag';

export const blackboardRawNesting = {
  authors: true,
  school: false,
  tags: true,
  targets: true,
};

export const blackboardNesting = {
  school: false,
  tags: {
    include: {
      ...blackboardTagRawNesting,
    },
  },
  authors: {
    include: {
      ...userRawNesting,
    },
  },
  targets: {
    include: {
      ...userRawNesting,
    },
  },
} as const;
