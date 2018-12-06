//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
const hasPathWithGivenSum = (node, sum) => {
  if (!node) return false;

  if (node.value === sum && !node.left && !node.right) {
    return true;
  }

  return (
    hasPathWithGivenSum(node.left, sum - node.value) ||
    hasPathWithGivenSum(node.right, sum - node.value)
  );
};

//*****************************************************************************
// Explanation
//*****************************************************************************
/*
  The only condition where we can return true, is if we arrive at a leaf node
  (i.e. both the left and right properties of the node are null) and the value
  of the node is equal to the sum (or part of the sum). If the value is not
  equal, or there are leaf nodes, we continue down the tree checking if the
  children now have a value of (sum - parent value).
*/
