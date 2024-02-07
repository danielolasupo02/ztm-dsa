/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Brute force

// var twoSum = function (nums, target) {
//   const numbers = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         numbers.push(i);
//         numbers.push(j);
//         return numbers;
//       }
//     }
//   }
// };

// Time Complexity => O(n2)
// Space Complexity => O(n)

// Optimal Solution

// function twoSum(nums, target) {
//     const numIndexMap = {};

//     for (let i = 0; i < nums.length; i++) {
//       const complement = target - nums[i];

//       if (numIndexMap.hasOwnProperty(complement)) {
//         return [numIndexMap[complement], i];
//       }

//       numIndexMap[nums[i]] = i;
//     }

//     // If no solution is found
//     return null;
//   }

// Time Complexity => O(n)
// Space Complexity => O(n)
