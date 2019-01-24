//Incomplete - Passing 6/7

const catalogUpdate = (catalog, updates) => {
  const catalogMap = new Map();

  catalog.forEach(([key, ...items]) => {
    catalogMap.set(key, [...items]);
  });

  updates.forEach(([key, ...items]) => {
    let updated = [];

    if (catalogMap.has(key)) {
      updated = [...catalogMap.get(key), ...items];
    } else {
      updated = [...items];
    }

    catalogMap.set(key, updated);
  });

  const result = [];

  for (let [key, value] of catalogMap) {
    result.push([key, ...[...value].sort(comparer)]);
  }

  return result.sort((a, b) => {
    //moves the'root' entry to the end
    if (a[0] === 'root') return 1;
    if (b[0] === 'root') return -1;

    return comparer(a[0], b[0]);
  });
};

const comparer = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] < b[i]) return -1;
    if (a[i] > b[i]) return 1;
  }

  return a > b;
};
