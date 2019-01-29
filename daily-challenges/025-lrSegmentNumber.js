const lrSegmentNumber = (l, r) => {
  let result = '';

  while (l <= r) {
    result += `${l}`;
    l++;
  }

  return parseInt(result);
};
