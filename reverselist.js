function reverseList(head){
    const values = [];
    let curr = head;
    while (curr!==null){
        values.push(curr.val);
        curr=curr.next;
    }
    curr = head;
    while (curr!==null){
        curr.val = values.pop();
        curr = curr.next;
    }
    return head;
}