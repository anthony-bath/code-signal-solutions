//Link to the challenge: https://app.codesignal.com/challenge/u8fmjEnYDRp3kZ2tt

const howManySundays = (n, startDay) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  let c = days.indexOf(startDay);
  let r = 0;

  for (let i = 0; i < n; i++) {
    c = (c + 1) % 7;

    if (days[c] === 'Sunday') {
      r++;
    }
  }

  return r;
};
