export const chatActivityRawNesting = {
  chat: true,
  user: true,
} as const;

export const chatActivityNesting = {
  chat: {
    include: true,
  },
  user: {
    include: true,
  },
} as const;
