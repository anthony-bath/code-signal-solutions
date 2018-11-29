//Link to the challenge: https://app.codesignal.com/challenge/W3nmGcuKzkg9AeEwo

const betterOrderTraversal = root => {
  const inOrder = [];
  const preOrder = [];
  const postOrder = [];

  inOrderTraverse(root, inOrder);
  preOrderTraverse(root, preOrder);
  postOrderTraverse(root, postOrder);

  return [inOrder, preOrder, postOrder].sort(lexComparer)[0];
};

const lexComparer = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) return 1;
    if (a[i] < b[i]) return -1;
  }

  return 0;
};

const inOrderTraverse = (node, arr) => {
  if (node.left) {
    inOrderTraverse(node.left, arr);
  }

  arr.push(node.value);

  if (node.right) {
    inOrderTraverse(node.right, arr);
  }
};

const preOrderTraverse = (node, arr) => {
  arr.push(node.value);

  if (node.left) {
    preOrderTraverse(node.left, arr);
  }

  if (node.right) {
    preOrderTraverse(node.right, arr);
  }
};

const postOrderTraverse = (node, arr) => {
  if (node.left) {
    postOrderTraverse(node.left, arr);
  }

  if (node.right) {
    postOrderTraverse(node.right, arr);
  }

  arr.push(node.value);
};
