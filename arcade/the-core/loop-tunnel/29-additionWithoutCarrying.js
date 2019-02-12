const additionWithoutCarrying = (param1, param2) => {
  let p1 = `${param1}`;
  let p2 = `${param2}`;

  const len = Math.max(p1.length, p2.length);

  p1 = p1.padStart(len, '0');
  p2 = p2.padStart(len, '0');

  const r = [];

  for (let i = len - 1; i >= 0; i--) {
    r.push((~~p1[i] + ~~p2[i]) % 10);
  }

  return ~~r.reverse().join('');
};
