//Link to the challenge: https://app.codesignal.com/challenge/supdEsjKCT7NMLDi2

const multiDivisorSequence = nums => {
  for (let i = 1; i < nums.length; i++) {
    if (i === 1) {
      if (nums[0] % nums[1] !== 0) return nums[1];
    } else {
      if (nums[i - 1] % nums[i] !== 0 && nums[i] % nums[i - 2] !== 0)
        return nums[i];
    }
  }

  return -1;
};
