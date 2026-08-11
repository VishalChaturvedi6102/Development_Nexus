// Insert a new node at the end of a DLL
// Write a JavaScript program to insert a new node at the end of a Doubly Linked List.
// o/p :
// Original Doubly Linked Lists:
//  2 3 4 5 6 7
// Insert at last position and value = 12
//  2 3 4 5 6 7 12
// Again insert at last position and value = 14
//  2 3 4 5 6 7 12 14



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
 insertLast(value) {
    this.insertAt(this.length, value);   
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
console.log("Insert at last position and value = 12");
numList.insertLast(12);
numList.printList();
console.log("Again insert at last position and value = 14");
numList.insertLast(14);
numList.printList();
