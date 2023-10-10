function Node(data) {
    this.data = data;
    this.next = null;
}
  
function sortedInsert(head, data) {

    if (head === null) return new Node(data);
        
    if (data < head.data) {
        let new_head = new Node(data);
        new_head.next = head;
        return new_head;
    }
    
    let current_node = head;
    while (current_node.next !== null && current_node.next.data < data) {
        current_node = current_node.next;
    }
    let insert = new Node(data);
    insert.next = current_node.next;
    current_node.next = insert;
    return head;
}