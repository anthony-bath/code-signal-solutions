//Link to the challenge: https://app.codesignal.com/challenge/vkne85d6itCqRZmck

const countSumOfTwoRepresentations = (n, l, r) => {
  let result = 0;

  for (let i = l; i <= r; i++) {
    for (let j = i; j <= r; j++) {
      if (i + j === n) result++;
    }
  }

  return result;
};
