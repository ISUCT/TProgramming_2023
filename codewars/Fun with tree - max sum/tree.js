class Node {
    constructor(value, left=null, right=null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  class BinaryTree {
    constructor(root) {
      this.root = root;
    }
  
    maxsum() {
      // Рекурсивная функция для обхода дерева и подсчета максимальной суммы
      const traverse = (node, currentSum) => {
        if (node === null) {
          return currentSum;
        }
        
        // Вычисляем сумму для левого и правого поддерева
        const leftSum = traverse(node.left, currentSum + node.value);
        const rightSum = traverse(node.right, currentSum + node.value);
        
        // Возвращаем максимальную сумму из левого и правого поддерева
        return Math.max(leftSum, rightSum);
      };
      
      // Начинаем обход с корневого узла и текущей суммой 0
      return traverse(this.root, 0);
    }
  }
  
  // Пример использования
  const leaf1 = new Node(4);
  const leaf2 = new Node(3);
  const leaf3 = new Node(5);
  const leaf4 = new Node(6);
  const node3 = new Node(2, leaf1, leaf2);
  const node2 = new Node(1, leaf3, leaf4);
  const root = new Node(0, node2, node3);
  
  const tree = new BinaryTree(root);
  console.log(tree.maxsum()); //должна вывести: 11 (0 -> 1 -> 5 -> 5)