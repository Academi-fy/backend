import { blackboardRawNesting } from '../blackboard';

export const blackboardTagRawNesting = {
  blackboards: true,
} as const;

export const blackboardTagNesting = {
  blackboards: {
    include: {
      ...blackboardRawNesting,
    },
  },
} as const;
