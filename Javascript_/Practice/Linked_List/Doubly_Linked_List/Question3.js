//  Check if a DLL is empty
// Write a JavaScript program to check whether a Doubly Linked Lists is empty or not. Return true otherwise false.


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

	// Insert node at end of the list
  
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
  
  size() {
		return this.length;
	}

  is_Empty(){
      return this.length === 0;
    };

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
let linkedlist_empty = numList.is_Empty();
console.log("Check the said Doubly Linked lists is empty or not! "+linkedlist_empty);
new_numList = new DoublyLinkedList();
new_numList.printList();
linkedlist_empty = new_numList.is_Empty();
console.log("Check the said Doubly Linked lists is empty or not! "+linkedlist_empty);
