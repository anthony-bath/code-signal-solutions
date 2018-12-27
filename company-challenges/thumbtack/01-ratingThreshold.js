const ratingThreshold = (threshold, ratings) => {
  return ratings.reduce(
    (a, c, i) => (average(c) >= threshold ? a : [...a, i]),
    []
  );
};

const average = arr =>
  arr.length > 0 ? arr.reduce((a, c) => a + c, 0) / arr.length : 0;
