import { userRawNesting } from '../user';
import { chatRawNesting } from '../chat';

export const messageRawNesting = {
  author: true,
  chat: true,
  replies: true,
  replyTo: true,
} as const;

export const messageNesting = {
  author: {
    include: {
      ...userRawNesting,
    },
  },
  chat: {
    include: {
      ...chatRawNesting,
    },
  },
  replies: {
    include: {
      ...messageRawNesting,
    },
  },
  replyTo: {
    include: {
      ...messageRawNesting,
    },
  },
  userMessages: false,
} as const;
