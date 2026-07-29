// Calculate the size of a SLL
// Write a JavaScript program that calculates the size of a Singly Linked list.
// o/p:-
// Singly Linked list:
// 12->13->14->15->14->NULL
// Size of the said list Singly Linked list:
// 5
// Add more elements to the said linked list.
// 12->13->14->15->14->20->21->22->NULL
// 8



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
 size(){
    let current = this.Head;
    let count = 0;
    while (current) {
        count++;
        current = current.next;
    }
    return count;
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
numList.add(new Node(14));
console.log("Singly Linked list:")
numList.displayList();
console.log("Size of the said list Singly Linked list:")
console.log(numList.size());
console.log("Add more elements to the said linked list.");
numList.add(new Node(20));
numList.add(new Node(21));
numList.add(new Node(22));
numList.displayList();
console.log(numList.size());
