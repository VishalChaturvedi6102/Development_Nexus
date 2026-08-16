// Get the index of an element in a DLL
// Write a JavaScript program to get the index of an element in a Doubly Linked lists.
// o/p:
// Original Doubly Linked Lists:
//  2 3 4 5 6 7
// Index of 2 in the said link list: 1
// Index of 7 in the said link list: 6
// Index of 1 in the said link list: -1
// Index of 9 in the said link list: -1


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
  
index_of(el) {
  let current = this.head;
  let index = 0;
  while (current) {
    if (current.value === el) {
      return index;
    }
    current = current.next;
    index++;
   }
   return -1;
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
result = numList.index_of(2);
console.log("Index of 2 in the said link list: "+result);
result = numList.index_of(7);
console.log("Index of 7 in the said link list: "+result);
result = numList.index_of(1);
console.log("Index of 1 in the said link list: "+result);
result = numList.index_of(9);
console.log("Index of 9 in the said link list: "+result);
