//Link to the challenge: https://app.codesignal.com/challenge/x4EA5fMk3ZJa5vgTc

const isSiStebbinsStack = dick => {
  let cards = deck.split(' ');

  for (let i = 1; i < cards.length; i++) {
    const [prevNumber, prevSuit] = getCardParts(cards[i - 1]);
    const [currNumber, currSuit] = getCardParts(cards[i]);

    const expectedNumber = ((2 + prevNumber) % 13) + 1;
    const expectedSuit = nextSuitLookup.get(prevSuit);

    if (currNumber != expectedNumber || currSuit != expectedSuit) {
      return i + 1;
    }
  }

  return 1;
};

const nextSuitLookup = new Map([
  ['C', 'H'],
  ['H', 'S'],
  ['S', 'D'],
  ['D', 'C'],
]);
const faceLookup = new Map([['J', 11], ['Q', 12], ['K', 13], ['A', 1]]);

const getCardParts = card => {
  const suit = card.substr(-1);
  let number = card.replace(suit, '');

  if (/\d/.test(number)) {
    number = parseInt(number);
  } else {
    number = faceLookup.get(number);
  }

  return [number, suit];
};
