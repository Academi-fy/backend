import { userRawNesting } from '../user/user.nesting';

export const blackboardRawNesting = {
  authors: true,
  school: true,
  tags: true,
  targets: true,
};

export const blackboardNesting = {
  school: true,
  tags: {
    include: {
      blackboards: true,
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
