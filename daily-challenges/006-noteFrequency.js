//Link to the challenge: https://app.codesignal.com/challenge/cWB64385L6Fe6zD4D

const noteFrequency = ([a, b, c]) => {
  const oct = c ? ~~c : ~~b;
  const n = lookup[a] + (b === 'b' ? -1 : b === '#' ? 1 : 0);

  return 440 * 2 ** ((n - 9) / 12 + oct - 4);
};

const lookup = {
  A: 9,
  B: 11,
  C: 0,
  D: 2,
  E: 4,
  F: 5,
  G: 7,
};

//*****************************************************************************
// Explanation
//*****************************************************************************
/*
  The lookup object is used to determine how many semitones (n) the given note 
  is above mid C. The input parameter to the function is a string of length 2 
  or 3 and as we are only interested in parts individually, I destructured it 
  into three variables. The oct variable is the last part of the string, and
  represents the octave. With the octave and the number of semitones above
  mid C, a simple formula can be used to calculate the note frequency
*/

//Golfed version for fun!
noteFrequency = ([a, b, c]) =>
  440 *
  2 **
    ((l[a] + (b == 'b' ? -1 : b == '#' ? 1 : 0) - 9) / 12 +
      (c ? ~~c : ~~b) -
      4);

l = {
  A: 9,
  B: 11,
  C: 0,
  D: 2,
  E: 4,
  F: 5,
  G: 7,
};
