const fancyRide = (l, fares) => {
  const totals = fares.map(f => l * f);

  for (let i = 0; i < totals.length; i++) {
    if (totals[i] > BUDGET) return lookup[i - 1];
  }

  return lookup[Math.max(...Object.keys(lookup))];
};

const BUDGET = 20;

const lookup = {
  0: 'UberX',
  1: 'UberXL',
  2: 'UberPlus',
  3: 'UberBlack',
  4: 'UberSUV',
};
