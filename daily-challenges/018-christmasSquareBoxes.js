//Link to the challenge: https://app.codesignal.com/challenge/uhEJTTKzo6qMwTawf

const christmasSquareBoxes = boxes => {
  boxes.sort((a, b) => a - b);

  let totalBoxes = 0;

  while (boxes.length > 0) {
    let nextBox = [];
    let i = boxes.length - 1;

    while (i >= 0) {
      if (nextBox.length === 0 || boxes[i] < nextBox[nextBox.length - 1]) {
        nextBox.push(boxes[i]);
        boxes.splice(i, 1);
      }

      i--;
    }

    if (nextBox.length > 0) totalBoxes++;
  }

  return totalBoxes;
};
