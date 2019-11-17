let tree = {
  left: {
    left: {
      value: 6
    },
    right: {
      value: 8
    },
    value: 5
  },
  right: {
    left: {
      value: 3
    },
    right: {
      value: 2
    },
    value: 4
  },
  value: 10
};

// Recursive function to return an inverted tree
function invertTree(node) {
  if (!node) return;

  let right = invertTree(node.right);
  let left = invertTree(node.left);
  if (left) node.left = right;
  if (right) node.right = left;
  return node;
}
console.log(JSON.parse(JSON.stringify(tree)), invertTree(tree));
