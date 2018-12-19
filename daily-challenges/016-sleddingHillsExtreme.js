//Link to the challenge: https://app.codesignal.com/challenge/LxnQG73ppitjERCdn

const sleddingHillsExtreme = (enjoyability, maxRuns) => {
  enjoyability = enjoyability.sort((a, b) => b - a);

  let result = 0;
  let currentMax = enjoyability[0];
  let countAtMax = 1;

  while (maxRuns > 0) {
    while (enjoyability[countAtMax] === currentMax) countAtMax++;

    let runs = Math.min(countAtMax, maxRuns);

    result += runs * currentMax;
    currentMax = Math.max(0, currentMax - 1);
    maxRuns -= runs;
  }

  return result % (10 ** 9 + 7);
};

//*****************************************************************************
// Explanation
//*****************************************************************************
/*
  This approach uses the idea that given an array sorted in ascending order,
  e.g. [a,b,c,d] where a > b > c > d, the process of decrementing as a run is
  had will cause the array to approach [d,d,d,d] and then approach [0,0,0,0].
  Using this, we only need to keep track of how many values are currently at
  the maximum value of the array, and check again when the current max has been
  decremented to the point of the first number that is not at the max.
*/
