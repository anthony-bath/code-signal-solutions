//Link to the challenge: https://app.codesignal.com/challenge/2WZvti9ec4QcMfv9c

const holidayPotluck = (dishes, capacity) => {
  dishes.sort(dishComparer);

  let enjoyment = 0;

  while (capacity && dishes.length) {
    const [ql, qt] = dishes.shift();
    const amount = Math.min(qt, capacity);

    capacity -= amount;
    enjoyment += amount * ql;
  }

  return enjoyment;
};

const dishComparer = ([qlA, qtA], [qlB, qtB]) => {
  if (qlB > qlA) return 1;
  else if (qlA > qlB) return -1;
  else return qtB - qtA;
};
