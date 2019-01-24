const campusCup = emails => {
  const map = new Map();

  emails.forEach(email => {
    const [_, domain] = email.split('@');
    let points;

    if (map.has(domain)) {
      points = map.get(domain).points + 20;
    } else {
      points = 20;
    }

    map.set(domain, { points, bonus: getBonus(points) });
  });

  const result = Array.from(map);

  result.sort(([k1, v1], [k2, v2]) => {
    if (v1.bonus > v2.bonus) return -1;
    else if (v2.bonus > v1.bonus) return 1;
    else return k1.localeCompare(k2);
  });

  return result.map(r => r[0]);
};

const getBonus = points => {
  switch (true) {
    case points < 100:
      return 0;
    case points >= 100 && points < 200:
      return 3;
    case points >= 200 && points < 300:
      return 8;
    case points >= 300 && points < 500:
      return 15;
    default:
      return 25;
  }
};
