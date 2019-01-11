const packetDescrambler = (seq, fragmentData, n) => {
  const final = Math.max(...seq);
  const maps = Array(1 + final).fill(-1);
  const message = Array(1 + final).fill(-1);

  for (let i = 0; i < seq.length; i++) {
    let idx = seq[i];

    if (message[idx] === -1) {
      if (maps[idx] === -1) {
        maps[idx] = new Map();
      }

      const m = maps[idx];
      const f = fragmentData[i];

      if (m.has(f)) {
        const newValue = m.get(f) + 1;
        m.set(f, newValue);

        if (newValue / n > 0.5) message[idx] = f;
      } else {
        m.set(f, 1);
      }
    }
  }

  if (message.some(x => x === -1)) return '';
  if (message[message.length - 1] !== '#') return '';
  if (message.indexOf('#') < message.length - 1) return '';

  return message.join('');
};
