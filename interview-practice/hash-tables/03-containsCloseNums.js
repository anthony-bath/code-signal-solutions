const containsCloseNums = (nums, k) => {
  const lookup = new Map();

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];

    if (i - lookup.get(n) <= k) {
      return true;
    } else {
      lookup.set(n, i);
    }
  }

  return false;
};

//*****************************************************************************
// Explanation
//*****************************************************************************
/*
  If the hash table contains the number, and the current index minus the value
  from the table is less than or equal to k, we can return true. Otherwise we
  store the current index as the last occurrence of the number for a future
  iteration.
*/
