const arrayMaxConsecutiveSum = (inputArray, k) => {
  let front = 0;
  let kSum = sum(inputArray.slice(front, k));
  let maxSum = kSum;

  for (let i = k; i < inputArray.length; i++) {
    kSum = kSum - inputArray[front] + inputArray[i];

    if (kSum > maxSum) {
      maxSum = kSum;
    }

    front += 1;
  }

  return maxSum;
};

const sum = arr => arr.reduce((acc, current) => acc + current, 0);
