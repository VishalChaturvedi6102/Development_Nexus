//  Get the head and tail of a DLL
// Write a JavaScript program to get the head and tail of a Doubly Linked Lists.
// o/p:
// Original Doubly Linked Lists:
//  2 3 5 6 8
// Head
 
 class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.previous = null;
	}
}

class DoublyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
			previous: null
		};
		this.length = 0;
		this.tail = this.head;
	}
  
  add(newNode) {
    if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
    } 
    else
    {
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }

  this.length++;
   }
  
    get_Head(){
        return this.head;
     }  

  get_Tail(){
      return this.tail;
     }

 printList() {
		let current = this.head;
		let result = [];
		while (current !== null) {
			result.push(current.value);
			current = current.next;
		}
		console.log(result.join(' '));
		return this;
	}
}

let numList = new DoublyLinkedList();
numList.add(new Node(2));
numList.add(new Node(3));
numList.add(new Node(5));
numList.add(new Node(6));
numList.add(new Node(8));
console.log("Original Doubly Linked Lists:")
numList.printList();
console.log("Head");
ghead = numList.get_Head();
console.log(ghead);
console.log("Tail");
ghead = numList.get_Tail();
console.log(ghead);
let new_numList = new DoublyLinkedList();
console.log("Original Doubly Linked Lists:")
new_numList.printList();
console.log("Head");
ghead = new_numList.get_Head();
console.log(ghead);
console.log("Tail");
ghead = new_numList.get_Tail();
console.log(ghead);
