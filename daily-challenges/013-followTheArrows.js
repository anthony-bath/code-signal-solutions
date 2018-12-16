//Link to the challenge: https://app.codesignal.com/challenge/9pGECq7jAbpHxC4Wr

const followTheArrows = (directionMap, [startR, startC]) => {
  const result = directionMap.map(e => e.split(''));

  let r = startR;
  let c = startC;
  let progress = true;

  while (progress) {
    const next = result[r][c];

    result[r][c] = '.';

    switch (next) {
      case '>':
        if (c + 1 >= result[0].length || result[r][c + 1] === '.')
          progress = false;
        else c += 1;
        break;
      case '<':
        if (c - 1 < 0 || result[r][c - 1] === '.') progress = false;
        else c -= 1;
        break;
      case '^':
        if (r - 1 < 0 || result[r - 1][c] === '.') progress = false;
        else r -= 1;
        break;
      case 'v':
        if (r + 1 >= result.length || result[r + 1][c] === '.')
          progress = false;
        else r += 1;
        break;
    }
  }

  return result.map(e => e.join(''));
};
