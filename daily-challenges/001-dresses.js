//Link to the challenge: https://app.codesignal.com/challenge/t8kHRFHTh4GKBCKSN

const dresses = colors =>
  colors
    .map(hexToRgb)
    .reduce((a, [r, g, b], i) => (a = g > r && g > b ? [...a, i] : a), []);

const hexToRgb = hex => hex.match(/.{1,2}/g).map(x => parseInt(x, 16));

//*****************************************************************************
// Explanation
//*****************************************************************************
/*
  The `hexToRgb` helper function takes the hexadecimal string and uses a regular
  expression to chunk it into length 2 strings, one for each of the RGB portions.
  Using the builtin `parseInt()` function with the radix parameter, these strings
  can easily be converted to decimal to `map` and return an array `[r,g,b]`.

  The `dresses` main function then uses this helper function to convert all of
  the heximal decimal colors and then `reduce()` to return an array of indices
  where the `g` value is strictly greater than the `r` and `b` values.
*/
