//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
const isTreeSymmetric = t => {
  const h = height(t);

  if (h <= 1) return true;

  for (let i = 1; i <= h; i++) {
    const level = flatten(getLevel(t, i));
    if (!isSymmetrical(level, 0)) return false;
  }

  return true;
};

const isSymmetrical = (arr, i) => {
  if (i > arr.length / 2) return true;

  if (arr[i] != arr[arr.length - i - 1]) return false;

  return isSymmetrical(arr, i + 1);
};

const flatten = arr =>
  arr.reduce(
    (a, b) => (a ? a.concat(Array.isArray(b) ? flatten(b) : b) : null),
    []
  );

const getLevel = (t, level) => {
  if (!t) return null;
  if (level === 1) return [t.value];

  const left = getLevel(t.left, level - 1);
  const right = getLevel(t.right, level - 1);

  return [left, right];
};

const height = t => (t ? 1 + Math.max(height(t.left), height(t.right)) : 0);

//*****************************************************************************
// Explanation
//*****************************************************************************
/*
  Uses Breadth First traversal of the tree to get each level of the tree in an
  array, and then determines symmetry if the array is the same when reversed.
*/
