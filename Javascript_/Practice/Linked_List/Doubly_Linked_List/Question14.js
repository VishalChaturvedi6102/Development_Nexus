// Remove the node from a DLL at the specified index
// Write a JavaScript program that removes the node from the Doubly linked lists at the specified index.
// o/p:
// Original Doubly Linked Lists:
//  2 3 4 5 6 7
// Remove the node,index = 5
//  2 3 4 5 6
// Remove the node,index = 4
//  2 3 4 5
// Remove the node,index = 2
//  2 4 5


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
 delete(index) {
   if (index < 0 || index >= this.length) return null;
   if (index === 0) return this.shift();
   if (index === this.length - 1) return this.pop();
   let current = this.head;
   let ctr = 0;
   while (ctr !== index) {
     current = current.next;
     ctr++;
   }
   current.previous.next = current.next;
   current.next.previous = current.previous;
   this.length--;
   return current;
 }
 shift() {
   if (!this.head) return null;
   let old_Head = this.head;
   if (this.length === 1) {
     this.head = null;
     this.tail = null;
   } else {
     this.head = old_Head.next;
     this.head.previous = null;
     old_Head.next = null;
   }
   this.length--;
   return old_Head;
 }
 pop() {
   if (!this.tail) return null;
   let pNode = this.tail;
   if (this.length === 1) {
     this.head = null;
     this.tail = null;
   } else {
     this.tail = pNode.previous;
     this.tail.next = null;
     pNode.previous = null;
   }
   this.length--;
   return pNode;
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
console.log("Remove the node,index = 5");
numList.delete(5)
numList.printList();
console.log("Remove the node,index = 4");
numList.delete(4)
numList.printList();
console.log("Remove the node,index = 2");
numList.delete(2)
numList.printList();