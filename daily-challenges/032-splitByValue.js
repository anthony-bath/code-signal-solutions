//Link to the challenge: https://app.codesignal.com/challenge/JtE3mNB44SyoTGaYi

const splitByValue = (k, elements) => {
  const below = [],
    above = [];

  elements.forEach(e => {
    if (e < k) below.push(e);
    else above.push(e);
  });

  return [...below, ...above];
};
