const differentValuesInMultiplicationTable = (n, m) => {
  const numbers = new Set();

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      numbers.add(i * j);
    }
  }

  return numbers.size;
};
