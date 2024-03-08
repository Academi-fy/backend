import { userRawNesting } from '@/rest/user';
import { chatRawNesting } from '@/rest/chat';

export const userChatRawNesting = {
  chat: true,
  user: true,
} as const;

export const userChatNesting = {
  chat: {
    include: {
      ...chatRawNesting,
    },
  },
  user: {
    include: {
      ...userRawNesting,
    },
  },
} as const;
