//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
const traverseTree = t => {
  if (!t) return [];

  let result = [];
  let queue = [t];

  while (queue.length > 0) {
    const node = queue.shift();

    result.push(node.value);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return result;
};
