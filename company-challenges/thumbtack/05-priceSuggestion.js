const priceSuggestion = contractData => {
  if (contractData.length < 2) return [];

  contractData.sort((a, b) => a - b);

  const len = contractData.length;
  const p1 = contractData.slice(0, len / 2);
  const p2 = contractData.slice(len / 2);

  return [median(p1, Math.floor), median(p2, Math.ceil)];
};

const median = (arr, roundFunc) => {
  const len = arr.length;
  const idx = Math.floor(len / 2);

  if (len % 2 === 0) {
    return roundFunc((arr[idx] + arr[idx - 1]) / 2);
  }

  return arr[idx];
};
