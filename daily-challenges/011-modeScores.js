//Link to the challenge: https://app.codesignal.com/challenge/fPbGBrBHieQD532uh

const modeScores = scores => {
  const modes = [];
  const lookup = new Map();
  let mode = { score: scores[0], count: 1 };

  for (const score of scores) {
    const count = lookup.has(score) ? lookup.get(score) + 1 : 1;

    lookup.set(score, count);

    if (count > mode.count || (count === mode.count && score > mode.score)) {
      mode = { score, count };
    }

    modes.push(mode.score);
  }

  return modes;
};

//*****************************************************************************
// Explanation
//*****************************************************************************
/*
  For each additional score, the mode will either stay the same or change to
  the current score if either the count of that score is now greater than the
  current mode's count, or if they are equal counts and the current score is
  higher, as per the challenge description.
*/
