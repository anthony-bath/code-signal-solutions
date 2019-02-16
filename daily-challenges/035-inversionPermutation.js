//Link to the challenge: https://app.codesignal.com/challenge/A674cE5ibcAEabYZn

const inversePermutation = permutation => {
  let max = Math.max(...permutation);
  const result = [];

  for (let i = 1; i <= max; i++) {
    const index = permutation.indexOf(i);

    result[i - 1] = index + 1;
  }

  return result;
};
