//Link to the challenge: https://app.codesignal.com/challenge/QbAFyBmzZec3aD6EZ

const whereToGather = travelCosts => {
  const costs = travelCosts
    .reduce((acc, _, index) => {
      let cost = 0;

      for (let j = 0; j < travelCosts.length; j++) {
        const amount = travelCosts[j][index];

        if (amount === -1) {
          cost = -1;
          break;
        } else {
          cost += amount;
        }
      }

      return [...acc, cost];
    }, [])
    .filter(cost => cost >= 0);

  return costs.length ? Math.min(...costs) : -1;
};

//Golfed
whereToGather = t => (
  (x = t
    .reduce(
      (a, _, i, r) => [
        ...a,
        r.reduce((a, c) => (a == -1 ? a : c[i] == -1 ? -1 : a + c[i]), 0),
      ],
      []
    )
    .filter(n => n >= 0)),
  x.length ? Math.min(...x) : -1
);
