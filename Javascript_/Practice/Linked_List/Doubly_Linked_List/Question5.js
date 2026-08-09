// Insert a new node at any position in a DLL
// Write a JavaScript program to insert a new node at any position of a Doubly Linked List.
// o/p:
// Original Doubly Linked Lists:
//  2 3 4 5 6 7
// Insert at 0 position and value = 12
// 12  2 3 4 5 6 7
// Insert at 6th position and value = 14
// 12  2 3 4 5 12 6 7
// Insert at 4th position and value = 16

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
  
 insertAt(position, data) {
  if (position < 0 || position > this.length) {
    return false;
  }

 var newNode = {
    value: data,
    next: null,
    previous: null
  };

  if (this.length === 0) {
    this.head = newNode;
    this.tail = newNode;
  } else if (position === 0) {
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
  } else if (position === this.length) {
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
  } else {
    var current = this.head;
    var index = 0;
    while (index < position) {
      current = current.next;
      index++;
    }
    newNode.next = current;
    newNode.previous = current.previous;
    current.previous.next = newNode;
    current.previous = newNode;
  }

  this.length++;
  return true;
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
numList.add(new Node(4));
numList.add(new Node(5));
numList.add(new Node(6));
numList.add(new Node(7));
console.log("Original Doubly Linked Lists:")
numList.printList();
console.log("Insert at 0 position and value = 12");
numList.insertAt(0, 12);
numList.printList();
console.log("Insert at 6th position and value = 14");
numList.insertAt(6, 12);
numList.printList();
console.log("Insert at 4th position and value = 16");
numList.insertAt(4, 15);