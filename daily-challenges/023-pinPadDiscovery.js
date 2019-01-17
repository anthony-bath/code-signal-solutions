const pinPadDiscovery = logins => {
  const pin = ['?', '?', '?', '?'];
  const maps = [];
  let index = 0;

  while (index < logins.length) {
    logins[index].map((button, i) => {
      if (!maps[i]) {
        maps[i] = new Map();
      }

      let m = maps[i];
      const [b1, b2] = button.split('');

      if (m.has(b1)) {
        m.set(b1, m.get(b1) + 1);
      } else {
        m.set(b1, 1);
      }

      if (m.has(b2)) {
        m.set(b2, m.get(b2) + 1);
      } else {
        m.set(b2, 1);
      }
    });

    index++;
  }

  maps.forEach((m, i) => {
    let max = -1;
    let likelyKey;

    for (let [key, value] of m) {
      if (value === max) {
        likelyKey = '?';
      } else if (value > max) {
        likelyKey = key;
        max = value;
      }
    }

    pin[i] = likelyKey;
  });

  return pin.join('');
};
