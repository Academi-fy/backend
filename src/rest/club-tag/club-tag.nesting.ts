export const clubTagRawNesting = {
  clubs: true,
};

export const clubTagNesting = {
  clubs: {
    include: {
      ...clubTagRawNesting,
    },
  },
};
