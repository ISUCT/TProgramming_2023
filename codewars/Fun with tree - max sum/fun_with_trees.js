function maxSum(root) {
    if (root != null) {
        var a = maxSum(root.left) + root.value;
          var b = maxSum(root.right) + root.value;
          if (b > a) {
              return b;
          } else {
            return a;
          }
      }
    return 0;
  }