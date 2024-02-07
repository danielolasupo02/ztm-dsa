// Activity 1:

/*
Given an array of strings, write a function that 
finds a particular string, "nemo", in the array,
and then outputs {the string name} has been found
*/

// Solution

// const names = ["NEMO", "DANIEL"];

// function findNemo(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "NEMO") {
//       console.log("FOUND Nemo!");
//     }
//   }
// }

// findNemo(names);

// Activity 2:

// What is the Big O of the below function? (Hint, you may want to go line by line)
// function funChallenge(input) {
//   let a = 10; // O(1)
//   a = 50 + 3; // O(1)

//   for (let i = 0; i < input.length; i++) {
//     // O(n)
//     anotherFunction(); // O(n)
//     let stranger = true; // O(n)
//     a++; // O(n)
//   }
//   return a; // O(n)
// }

// // Big O = 1 + 1 + 1 + n + n + n + n
// // Big O = 3 + 4n
// // Big O = n => O (n)

//Activity 3
// What is the Big O of the below function? (Hint, you may want to go line by line)
// function anotherFunChallenge(input) {
//   let a = 5; // O(1)
//   let b = 10; // O(1)
//   let c = 50; // O(1)
//   for (let i = 0; i < input; i++) {
//     // O(n)
//     let x = i + 1; // O(n)
//     let y = i + 2; // O(n)
//     let z = i + 3; // O(n)
//   }
//   for (let j = 0; j < input; j++) {
//     // O(n)
//     let p = j * 2; // O(n)
//     let q = j * 2; // O(n)
//   }
//   let whoAmI = "I don't know"; // O(1)
// }
// // Big O = 4 + 7n = O(n)

//Activity 4
// What is the Big O of the below function? (Hint, you may want to go line by line)
// function printFirstItemThenFirstHalfThenSayHi100Times(items) {
//   console.log(items[0]); O(1)

//   var middleIndex = Math.floor(items.length / 2); O(n/2)
//   var index = 0;

//   while (index < middleIndex) {
//     console.log(items[index]);
//     index++;
//   }

//   for (var i = 0; i < 100; i++) {
//     console.log("hi");  O (100)
//   }
// }

// // Big O = O(1) + O(n/2) + O(100)
// Big O => O (n)

//Activity 5
// What is the Big O of the below function?

//Log all pairs of array

// const boxes = ["a", "b", "c", "d", "e"];
// function logAllPairsOfArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     // O(n)
//     for (let j = 0; j < array.length; j++) {
//       // O(n)
//       console.log(array[i], array[j]);
//     }
//   }
// }

// logAllPairsOfArray(boxes);

// // Big O => O(n*n)
// // O(n^2)

//Activity 6

//Given 2 arrays, create a function that
//let's a user know (true/false) whether these
//two arrays contain any common items
//For Example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
//should return false.
//----------
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'x'];
// should return true.

// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "i"];

//Brute Force
// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "x"];

// function hasCommonItem(arr1, arr2) {
//   arr1.forEach(function (elOne) {
//     arr2.forEach(function (elTwo) {
//       if (elOne === elTwo) {
//         return true;
//       }
//     });
//   });
//   return false;
// }

// hasCommonItem(array1, array2);

//Optimal Force

// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "x"];

// const hasCommonItem = function (arr1, arr2) {
//   const map = {};

//   // loop through first array and
//   // create object where properties === items in the array
//   for (let i = 0; i < arr1.length; i++) {
//     if (!map[i]) {
//       const item = arr1[i];
//       map[item] = true;
//     }
//   }

//   // loop through second array
//   // and check if item in second array exists on created object.
//   for (let j = 0; j < arr2.length; j++) {
//     if (map[arr2[j]]) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(hasCommonItem(array1, array2));

// Activity 7

// Google Interview

// Brute force

// const array1 = [1, 2, 4, 4];
// const sum = 8;
// function hasPairWithSum(array, targetSum) {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === targetSum) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(hasPairWithSum(array1, sum));

// // Time Complexity => O(n2)
// // Space Complexity => O(1)

// Optimal Solution

// const array1 = [1, 2, 4, 4];
// const sum = 8;

// function hasPairWithSum(array, sum) {
//   const map = {};
//   for (let i = 0; i < array.length; i++) {
//     const num = array[i];
//     map[num] = sum - num;
//     if (map[array[i]]) {
//     }
//   }
//   console.log(map);
// }

// console.log(hasPairWithSum(array1, 8));
