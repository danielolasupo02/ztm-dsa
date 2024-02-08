// // Activity 1: Linked List of same head and tail
// // Linked List Value => 10

// // class LinkedList {
// //   constructor(value) {
// //     this.head = {
// //       value: value,
// //       next: null,
// //     };

// //     this.tail = this.head;
// //     this.length = 1;
// //   }
// // }

// // const myLinkedList = new LinkedList(10);
// // console.log(myLinkedList);

// // Activity 2: Linked List of different head and tail with append functionality
// // Linked List Value => 10 - 5 - 16

// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//     };

//     this.tail = this.head;
//     this.length = 1;
//   }

//   append(value) {
//     const newNode = {
//       value: value,
//       next: null,
//     };

//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;

//     return this;
//   }

//   prepend(value) {
//     const newNode = {
//       value: value,
//       next: null,
//     };

//     this.head.next = value;
//     this.head.value = newNode.value;

//     this.length++;

//     return this;
//   }
// }

// const myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(1);

// console.log(myLinkedList);

//PRACTICE

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//     };

//     this.tail = this.head;
//     this.length = 1;
//   }

//   append(value) {
//     const newNode = new Node(value);
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//   }

//   prepend(value) {
//     const newNode = new Node(value);
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//   }

//   printList() {
//     const array = [];
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       array.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     console.log(array);
//   }

//   insert(index, value) {
//     //check params
//     if (index >= this.length) {
//       return this.append(value);
//     }
//     const newNode = new Node(value);
//     const leader = this.traverseToIndex(index - 1);
//     const holdingPointer = leader.next;
//     leader.next = newNode;
//     newNode.next = holdingPointer;
//     this.length++;
//     return this.printList();
//   }

//   traverseToIndex(index) {
//     let counter = 0;
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       currentNode = currentNode.next;
//       counter++;
//     }
//     return currentNode;
//   }

//   remove(index) {
//     //check params
//     if (index >= this.length) {
//       return this;
//     }
//   }
// }

// const myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.insert(200, 90);
// // console.log(myLinkedList.printList);
// console.log(myLinkedList);
// myLinkedList.printList();

//Practice 2

class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class LinkedList {
  constructor(value) {
    this.head = { value: value, next: null };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode; // this.head.next = newNode
    this.tail = newNode; //this.head = newNode
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  // length => 3
  // index => 3
  // whenever index is greater than or equal to object length, append

  //   insert(index, value) {
  //     //check params
  //     if (index >= this.length) {
  //       return this.append(value);
  //     }
  //     const newNode = new Node(value);
  //     const leader = this.traverseToIndex(index - 1);
  //     const holdingPointer = leader.next;
  //     leader.next = newNode;
  //     newNode.next = holdingPointer;
  //     this.length++;
  //     return this.printList();
  //   }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    let newNode = new Node(value);
    let leader = this.traverseToIndex(index - 1);
    let holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  remove(index) {
    // check params
    if (index >= this.length) {
      return this;
    }
    //10 - 5 - 6
    let leader = this.traverseToIndex(index - 1);
    let unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}
// 10 - 5 - 16
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
// // 2 - 10 - 5 - 16
// myLinkedList.prepend(2);

// myLinkedList.printList();
// myLinkedList.traverseToIndex(2);
// // console.log(myLinkedList);
// myLinkedList.insert(2, 70);
// myLinkedList.insert(3, 45);
myLinkedList.remove(2);
// myLinkedList.remove(0);

myLinkedList.printList();
console.log(myLinkedList);
