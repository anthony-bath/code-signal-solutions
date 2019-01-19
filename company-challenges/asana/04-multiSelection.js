const multiSelection = (
  [width, height, yOffset],
  tasks,
  [[x1, y1], [x2, y2]]
) => {
  const sY = Math.min(y1, y2);
  const eY = Math.max(y1, y2);

  let sT = -1;
  let eT = -1;

  tasks.forEach((task, i) => {
    const start = i * (height + yOffset);
    const end = start + height;

    if (sY >= start && sY <= end && sT === -1) sT = i;
    if (start <= eY && end >= eY && eT === -1) eT = i;
  });

  return sT > -1 && eT > -1 ? tasks.slice(sT, 1 + eT) : [];
};
