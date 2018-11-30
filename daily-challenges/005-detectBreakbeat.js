//Link to the challenge: https://app.codesignal.com/challenge/FydJQM2qks5LJYkeP

const detectBreakbeat = pattern => {
  const samples = pattern.split(' ');
  const len = samples.length;
  const _2q = 0.25 * len;
  const _4q = 0.75 * len;
  const _3e = (3 * len) / 8;
  const _5e = (5 * len) / 8;

  if (samples[0] === REST || samples[_2q] === REST) return false;
  if (samples[_2q] !== samples[_4q]) return false;
  if (samples[_3e] !== samples[0] && samples[_5e] !== samples[0]) return false;
  if (samples[0] === samples[_2q]) return false;

  return true;
};

const REST = '~';
