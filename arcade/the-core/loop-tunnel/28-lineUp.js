const lineUp = commands => {
  if (commands.length === 0) return 0;

  let result = 0;
  let current = commands[0];

  if (current === 'A') result++;

  for (let i = 1; i < commands.length; i++) {
    const next = commands[i];

    if (current === 'A' && (next === 'L' || next === 'R')) {
      //no increase in count
      current = next;
    } else if (next === 'A' && (current === 'L' || current === 'R')) {
      //no increase in count
      //current is unchanged
    } else if (
      (next === 'L' || next === 'R') &&
      (current === 'L' || current === 'R')
    ) {
      current = 'A';
      result++;
    } else {
      result++;
      current = next;
    }
  }

  return result;
};
