// Remove the tail element from a DLL
// Write a JavaScript program that removes the tail element from a doubly Linked lists.
// o/p:
// Original Doubly Linked Lists:
//  2 3 4 5 6 7
// Remove the Tail element:
//  2 3 4 5 6
// Remove the Tail element:
//  2 3 4 5

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
 remove_Tail() {
   if (!this.tail) {
     return null;
   }
   if (!this.tail.previous) {
     this.tail = null;
     this.head = null;
     return;
   }
   this.tail = this.tail.previous;
   this.tail.next = null;
   this.length--;
 }
 printList(){
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
console.log("Remove the Tail element:");
numList.remove_Tail();
numList.printList();
console.log("Remove the Tail element:");
numList.remove_Tail();
numList.printList();