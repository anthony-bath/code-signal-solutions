//Link to the challenge: https://app.codesignal.com/challenge/RNEKN3MFMDxGwHYab

const trafficLights1D = roadMap => {
  let t = 0;

  for (let i = 0; i < roadMap.length; i++) {
    t += roadMap[i][0] - (i > 0 ? roadMap[i - 1][0] : 0);
    t = getLeaveTime(t, roadMap[i][1]);
  }

  return t;
};

const getLeaveTime = (currentTime, frequency) => {
  if ((n = Math.floor(currentTime / frequency)) % 2 === 1) {
    return (n + 1) * frequency;
  }

  return currentTime;
};

//*****************************************************************************
// Explanation
//*****************************************************************************
/*
  The `getLeaveTime` helper function uses the current time elapsed and the
  frequency of the current light to determine what time the light will be left.
  If the floored division is odd, that means the current time falls within a 
  red cycle, and so by adding 1 to the result and multiplying by frequency, we
  can find the time of the next green (even) cycle. If the result was even, we
  are able to leave right away as we are already within a green cycle.

  It is just a matter then of iterating over all of the lights and incrementing
  time by the delta in distance between light i and light i-1, and then using
  the `getLeaveTime` helper function to determine when we can leave that light
  and move onto the next (or the end).
*/
