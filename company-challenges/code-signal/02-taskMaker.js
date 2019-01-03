const taskMaker = (source, challengeId) => {
  const exp = new RegExp(/\s{0,}\/\/DB\s(\d+)\/\//i);
  const challenge = [];

  let index = -1;
  let shouldDelete = false;

  source.forEach((line, i) => {
    if (!exp.test(line)) {
      [index, shouldDelete] = removeCorrectLine(index, shouldDelete, challenge);
      challenge.push(line);
    } else {
      if (index === -1) {
        index = challenge.length - 1;
      }

      if (challengeId === parseInt(line.replace(exp, '$1'))) {
        challenge.push(' '.repeat(line.indexOf('/')) + line.replace(exp, ''));
        shouldDelete = true;
      }
    }
  });

  removeCorrectLine(index, shouldDelete, challenge);

  return challenge;
};

const removeCorrectLine = (index, shouldDelete, challenge) => {
  if (index !== -1) {
    if (shouldDelete) challenge.splice(index, 1);

    index = -1;
    shouldDelete = false;
  }

  return [index, shouldDelete];
};
