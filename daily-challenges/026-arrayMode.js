const arrayMode = sequence => {
  let mode,
    max = 0;
  const map = new Map();

  for (let n of sequence) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }

    if (map.get(n) > max) {
      mode = n;
      max = map.get(n);
    }
  }

  return mode;
};
