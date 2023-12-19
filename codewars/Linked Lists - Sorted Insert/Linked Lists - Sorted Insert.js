function Node(data) {
    this.data = data;
    this.next = null;
   }
   
   function sortedInsert(head, data) {
    if (head === null || head.data > data) {
       let newNode = new Node(data);
       newNode.next = head;
       return newNode;
    }
   
    if (head.next === null) {
       let newNode = new Node(data);
       head.next = newNode;
       return head;
    }
   
    head.next = sortedInsert(head.next, data);
    return head;
   }