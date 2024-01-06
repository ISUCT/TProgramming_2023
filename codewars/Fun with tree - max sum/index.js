function maxSum(root) {
    /* case if null */
    if (root == null){
        return 0
    }
    
    /* case if no children */
    if(root.left == null && root.right == null){
      return root.value
    }

    /* case if has only one children */
    if(root.right == null)
        return root.value + maxSum(root.left);
    else if(root.left == null)
        return root.value + maxSum(root.right);

    /* case if both children exist */
    return Math.max(root.value + maxSum(root.left), root.value + maxSum(root.right));
}