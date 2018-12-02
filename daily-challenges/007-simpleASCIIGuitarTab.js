//Link to the challenge: https://app.codesignal.com/challenge/C82o9dbM6sYPFHd7p

const simpleASCIIGuitarTab = notes => {
  const tab = {
    e: ['e |-'],
    B: ['B |-'],
    G: ['G |-'],
    D: ['D |-'],
    A: ['A |-'],
    E: ['E |-'],
  };

  notes.split(' ').forEach(note => {
    const [string, fret] = lookup.get(note);

    tab[string].push(fret);
    strings.forEach(s => tab[s].push(s === string ? '-' : '--'));
  });

  return strings.map(s => (tab[s].push('|'), tab[s].join('')));
};

const E = 'E';
const A = 'A';
const D = 'D';
const G = 'G';
const B = 'B';
const e = 'e';
const strings = [e, B, G, D, A, E];

const lookup = new Map([
  ['E2', [E, 0]],
  ['A2', [A, 0]],
  ['D3', [D, 0]],
  ['G3', [G, 0]],
  ['B3', [B, 0]],
  ['E4', [e, 0]],
  ['F2', [E, 1]],
  ['A#2', [A, 1]],
  ['D#3', [D, 1]],
  ['G#3', [G, 1]],
  ['C4', [B, 1]],
  ['F4', [e, 1]],
  ['F#2', [E, 2]],
  ['B2', [A, 2]],
  ['E3', [D, 2]],
  ['A3', [G, 2]],
  ['C#4', [B, 2]],
  ['F#4', [e, 2]],
  ['G2', [E, 3]],
  ['C3', [A, 3]],
  ['F3', [D, 3]],
  ['A#3', [G, 3]],
  ['D4', [B, 3]],
  ['G4', [e, 3]],
  ['G#2', [E, 4]],
  ['C#3', [A, 4]],
  ['F#3', [D, 4]],
  ['D#4', [B, 4]],
  ['G#4', [e, 4]],
]);

//*****************************************************************************
// Explanation
//*****************************************************************************
/*
  The lookup Map is used to determine the required string and fret to hold to
  play the desired note. With this information, the tab can be updated by adding
  the fret number to the correct string followed by a '-' and '--' to the other
  strings.
*/
