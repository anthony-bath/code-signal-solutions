//Link to the challenge: https://app.codesignal.com/challenge/s4P7vyy9XafQaDomS

const detectTempo = waveform => {
  const beats = new Set();
  const tempos = new Set();

  for (let i = 0; i < waveform[0].length; i++) {
    if (waveform[0][i] === '#' && waveform[waveform.length - 1][i] === '#') {
      beats.forEach(b => tempos.add(i - b));
      beats.add(i);
    }
  }

  let minTempo = Number.MAX_VALUE;

  for (let beat of beats) {
    for (let tempo of tempos) {
      if (beat > tempo || tempo > minTempo) continue;

      let found = true;

      for (let k = beat; k < waveform[0].length; k += tempo) {
        if (!beats.has(k)) {
          found = false;
          break;
        }
      }

      if (found) {
        minTempo = tempo;
      }
    }
  }

  return minTempo;
};

//*****************************************************************************
// Explanation
//*****************************************************************************
/*
  As each beat is identified, all possible tempos from that beat are also
  identified. From here, it is just a matter of iterating over each beat and
  tempo, skipping tempos that are greater than the current beat, and checking
  to see if there are beats all the way up to the end of the waveform for the
  current tempo.
*/
