import { clubRawNesting } from '../club';
import { courseRawNesting } from '../course';
import { userChatRawNesting } from '../user-chat';
import { chatActivityRawNesting } from '../chat-activity/chat-activity.nesting';

export const chatRawNesting = {
  clubs: true,
  courses: true,
  messages: true,
  targets: true,
} as const;

export const chatNesting = {
  activities: {
    include: {
      ...chatActivityRawNesting,
    },
  },
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
  targets: {
    include: {
      ...userChatRawNesting,
    },
  },
} as const;
