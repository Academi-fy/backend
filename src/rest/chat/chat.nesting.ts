import { clubRawNesting } from '../club';
import { courseRawNesting } from '../course';
import { messageRawNesting } from '../message';
import { userChatRawNesting } from '../user-chat';

export const chatRawNesting = {
  clubs: true,
  courses: true,
  messages: true,
  targets: true,
} as const;

export const chatNesting = {
  clubs: {
    include: {
      ...clubRawNesting,
    },
  },
  courses: {
    include: {
      ...courseRawNesting,
    },
  },
  messages: {
    include: {
      ...messageRawNesting,
    },
  },
  targets: {
    include: {
      ...userChatRawNesting,
    },
  },
} as const;
