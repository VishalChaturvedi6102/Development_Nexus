// Get a node in a SLL
// Write a JavaScript program to get a node in an existing singly linked list.
// o/p:
// 12->13->14->15->NULL
// Node details at index 0:
// {"data":12,"next":{"data":13,"next":{"data":14,"next":{"data":15,"next":null}}}}
// Node details at index 2:
// {"data":14,"next":{"data":15,"next":null}}

class Node {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}
class SinglyLinkedList {
    constructor(Head = null) {
        this.Head = Head
    }
add(newNode){
    let node = this.Head;
    if(node==null){
        this.Head = newNode;
        return;
    }
    while (node.next) {
        node = node.next;
    }
    node.next = newNode;
} 
get_node(index){
    let node = this.Head;
    if(index==0) {
        return this.Head;
    }
    while(index--){
        if(node.next!==null)
            node = node.next;
        else
            throw Error("Index Out of Bound");
    }
    return node;
}  
 displayList(){
    let node = this.Head;
    var str = ""
    while (node) {
        str += node.data + "->";
        node = node.next;
    }
    str += "NULL"
    console.log(str);  
  }
}
let numList = new SinglyLinkedList();
numList.add(new Node(12));
numList.add(new Node(13));
numList.add(new Node(14));
numList.add(new Node(15));
numList.displayList();
console.log("Node details at index 0:")
console.log(numList.get_node(0));
console.log("Node details at index 2:")
console.log(numList.get_node(2));
