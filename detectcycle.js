function detectcycle(head){
    const visited = new Set();
    curr = head;
    while(curr!==null){
        if(visited.has(curr)){
            return curr;
        }
        visited.add(curr);
        curr = curr.next;
    }
    return null;
}