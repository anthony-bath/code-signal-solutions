const areFollowingPatterns = (strings, patterns) => {
  const stringLookup = new Map();
  const patternLookup = new Map();

  for (let i = 0; i < strings.length; i++) {
    const s = strings[i];
    const p = patterns[i];

    if (!stringLookup.has(s) && !patternLookup.has(p)) {
      stringLookup.set(s, p);
      patternLookup.set(p, s);
    } else if (stringLookup.get(s) !== p || patternLookup.get(p) !== s) {
      return false;
    }
  }

  return true;
};

//*****************************************************************************
// Explanation
//*****************************************************************************
/*
  If both of the hash tables (Maps) don't contain the current respective value,
  they can be added to create the matching pairs. This is done so a value in
  one will fail if it has a value in the other that was used for a different
  value. If one or the other aren't used, that means they have to be in the
  hash tables and if they don't match, we can return false.
*/
