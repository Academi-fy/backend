import { chatRawNesting } from '../chat';
import { userRawNesting } from '../user';

export const chatActivityRawNesting = {
  chat: true,
  executor: true,
  answeredBy: true,
  answerTo: true,
  readBy: true,
} as const;

export const chatActivityNesting = {
  chat: {
    include: {
      ...chatRawNesting,
    },
  },
  executor: {
    include: {
      ...userRawNesting,
    },
  },
  answeredBy: {
    include: {
      ...chatActivityRawNesting,
    },
  },
  answerTo: {
    include: {
      ...chatActivityRawNesting,
    },
  },
  readBy: {
    include: {
      ...userRawNesting,
    },
  },
} as const;
