//Link to the challenge: https://app.codesignal.com/challenge/6hgcY4YgsTW2GugT5

const maxFraction = (numerators, denominators) => {
  let max = 0;
  let result;

  for (let i = 0; i < numerators.length; i++) {
    const current = numerators[i] / denominators[i];

    if (current > max) {
      max = current;
      result = i;
    }
  }

  return result;
};
