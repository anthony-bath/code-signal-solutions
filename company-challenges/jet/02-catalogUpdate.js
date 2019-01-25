const catalogUpdate = (catalog, updates) => {
  const catalogMap = new Map();

  catalog.forEach(([key, ...items]) => {
    catalogMap.set(key, items);
  });

  updates.forEach(([key, ...items]) => {
    let updated = [];

    if (catalogMap.has(key)) {
      updated = [...catalogMap.get(key), ...items];
    } else {
      updated = items;
    }

    catalogMap.set(key, updated);
  });

  const result = [];

  for (let [key, value] of catalogMap) {
    result.push([key, ...value.sort()]);
  }

  return result.sort((a, b) => a[0] > b[0]);
};
