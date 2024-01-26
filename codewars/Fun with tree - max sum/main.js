function maxSum(root) {
    if (!root) { return 0; }

    let max = Number.MIN_SAFE_INTEGER;

    function dfs(node, sum) {
        if (!node) { return; }

        sum += node.value;

        // Достигнут конечный узел, при необходимости обновите максимальную сумму.
        if (!node.left && !node.right) { max = Math.max(max, sum); }

        dfs(node.left, sum);
        dfs(node.right, sum);
    };

    dfs(root, 0);

    return max;
}