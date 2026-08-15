// Convert a DLL into a string
// Write a JavaScript program to convert a Doubly Linked List into a string and return it.
// o/p:
// Original Doubly Linked Lists:
//  2 3 4 5 6 7
// Converts the said Doubly Linked Lists into a string:
// undefined 2 3 4 5 6 7 
// Original Doubly Linked Lists:

// Converts the said Doubly Linked Lists into a string:
// undefined 


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
  
  convert_to_string() {
   if(!this.head) return ""
    let current = this.head;
    let result = "";
    while (current != null) {
        result += current.value + " ";
        current = current.next;
    }
    return result;
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
console.log("Converts the said Doubly Linked Lists into a string:");
result = numList.convert_to_string();
console.log(result);
let numList1 = new DoublyLinkedList();
console.log("Original Doubly Linked Lists:")
numList1.printList();
console.log("Converts the said Doubly Linked Lists into a string:");
result = numList1.convert_to_string();
console.log(result);
