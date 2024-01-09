function Node(data) {
    this.data = data;
    this.next = null;
}

function sortedInsert(head, data) {
    const newNode = new Node(data);
    if (!head || data < head.data) {
        newNode.next = head;
        return newNode;
    }
    let curr = head;
    while (curr.next && data >= curr.next.data) { curr = curr.next; }
    newNode.next = curr.next;
    curr.next = newNode;
    return head;
}

// Лучшее решение
// function Node(data, nxt) {
//     this.data = data;
//     this.next = nxt;
// }
// function sortedInsert(head, data) {
//     if (!head || data < head.data) return new Node(data, head);
//     else {
//         head.next = sortedInsert(head.next, data);
//         return head;
//     }
// }