//Link to the challenge: https://app.codesignal.com/challenge/q5WHJQTyiL4XERsBL

const symmetricalMatrix = (n, inputMatrix) => {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (inputMatrix[j][i] != inputMatrix[i][j]) return false;
    }
  }

  return true;
};
