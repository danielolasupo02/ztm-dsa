// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }

//   get(index) {
//     return this.data[index];
//   }

//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }

//   pop() {
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     // return lastItem;
//   }

//   delete(index) {
//     const item = this.data[index];
//     this.shiftItems(index);
//     return item;
//   }

//   shiftItems(index) {
//     for (let i = index; i < this.length; i++) {
//       this.data[i] = this.data[i + 1];
//     }

//     delete this.data[this.length - 1];
//     this.length--;
//   }
// }

// const newArray = new MyArray();

// newArray.push("how");
// newArray.push("are");
// newArray.push("you");
// newArray.push(",");
// newArray.push("reh");
// newArray.push("?");
// newArray.delete(3);
// console.log(newArray);

// REVERSE A STRING

// function reverse(str) {
//   const strArray = str.split("");
//   const revArray = [];
//   let item;
//   for (let i = strArray.length - 1; i >= 0; i--) {
//     item = strArray[i];
//     revArray.push(item);
//   }

//   console.log(revArray.join(""));
// }

// reverse("leinaD si eman ym iH");

// function reverseArray(numbers) {
//   const allIntegers = numbers.every((element) => Number.isInteger(element));
//   console.log(allIntegers); // outputs if all numbers in array are integers or not

//   // check for integer
//   if (!allIntegers) {
//     console.log("all array elements have to be integers...");
//     return "This has to be an integer";
//   }

//   const reversedResult = [];
//   const totalItems = numbers.length - 1;
//   let char;

//   // start looping from last character to first character
//   for (let i = totalItems; i >= 0; i--) {
//     char = numbers[i];
//     reversedResult.push(char);
//   }

//   // join reversed number array
//   console.log(reversedResult.join(" "));
// }

// reverseArray([1, 4, 3, 2]);

// const mergeSortedArrays = (arr1, arr2) => {
//   const mergedArray = [];
//   let num;
//   for (let i = 0; i < arr1.length; i++) {
//     mergedArray.push(arr1[i]);
//   }

//   for (let j = 0; j < arr2.length; j++) {
//     mergedArray.push(arr2[j]);
//   }

//   console.log(mergedArray);
//   console.log(typeof "hello");
// };
// mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
