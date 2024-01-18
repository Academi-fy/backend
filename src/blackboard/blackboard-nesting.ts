export default {
  include: {
    school: true,
    tags: true,
    authors: {
      include: {
        userAccount: true,
      },
    },
    targets: {
      include: {
        userAccount: true,
      },
    },
  },
} as const;
