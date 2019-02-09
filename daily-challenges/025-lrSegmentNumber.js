//Link to the challenge: https://app.codesignal.com/challenge/ptsMnLDpgLRo3dbCB

const lrSegmentNumber = (l, r) => {
  let result = '';

  while (l <= r) {
    result += `${l}`;
    l++;
  }

  return parseInt(result);
};
