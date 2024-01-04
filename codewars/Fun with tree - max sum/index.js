function maxSum(root) {
  if (!root) {
    return 0;
  }

  function dfs(node, currentSum) {
    if (!node) {
      return currentSum;
    }

    currentSum += node.value;

    if (!node.left && !node.right) {
      return currentSum;
    }

    const leftSum = dfs(node.left, currentSum);
    const rightSum = dfs(node.right, currentSum);

    return Math.max(leftSum, rightSum);
  }

  return dfs(root, 0);
}

maxSum()