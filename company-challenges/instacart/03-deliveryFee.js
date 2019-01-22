const deliveryFee = (intervals, fees, deliveries) => {
  const counts = Array(intervals.length).fill(0);

  deliveries.forEach(([h, m]) => {
    for (let i = 0; i < intervals.length; i++) {
      const last = intervals[i];
      const next = intervals[i + 1] ? intervals[i + 1] - 1 : 23;

      if (h >= last && h <= next) counts[i]++;
    }
  });

  const result = counts.map((count, i) => {
    if (count > 0) return fees[i] / count;
    return -1;
  });

  for (let i = 1; i < result.length; i++) {
    if (result[i] === -1 || result[i - 1] !== result[i]) return false;
  }

  return true;
};
