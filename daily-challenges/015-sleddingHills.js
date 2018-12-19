//Link to the challenge: https://app.codesignal.com/challenge/LLvSQBNDeLXqdksrX

const sleddingHills = (enjoyability, maxRuns) => {
  enjoyability = enjoyability.sort((a, b) => a - b);

  const len = enjoyability.length;

  let result = 0;

  while (maxRuns > 0) {
    let last = enjoyability[len - 1];

    result += last--;

    enjoyability[len - 1] = Math.max(0, last);

    if (enjoyability[len - 2] > last) {
      enjoyability = enjoyability.sort((a, b) => a - b);
    }

    maxRuns--;
  }

  return result;
};

//*****************************************************************************
// Explanation
//*****************************************************************************
/*
  Standard brute force approach due to the relaxed constraints of the easier
  version of this challenge. Each iteration the largest value is added to the
  result, decremented and then the array is re-sorted if needed.
*/
