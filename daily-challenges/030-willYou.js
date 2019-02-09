//Link to the challenge: https://app.codesignal.com/challenge/ygdh4KsxFtHtvu5c4

const willYou = (young, beautiful, loved) => {
  if (young && beautiful && !loved) return true;
  if (loved && (!young || !beautiful)) return true;

  return false;
};
