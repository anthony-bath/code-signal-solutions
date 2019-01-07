//Link to the challenge: https://app.codesignal.com/challenge/RLhyzdapSvfRXCHHd

const slalomSkiing = (flags, threshold) => {
  let d1 = -1;
  let d2 = 1;

  let c1 = flags[0] + d1;
  let c2 = flags[0] + d2;

  let d1f = false;
  let d2f = false;

  for (let i = 1; i < flags.length; i++) {
    d1 *= -1;
    d2 *= -1;

    let n1 = flags[i] + d1;
    let n2 = flags[i] + d2;

    if (Math.abs(n1 - c1) > threshold) d1f = true;
    if (Math.abs(n2 - c2) > threshold) d2f = true;

    if (d1f && d2f) return i;
    else {
      c1 = n1;
      c2 = n2;
    }
  }

  return -1;
};
