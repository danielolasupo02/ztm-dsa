// Brute Force Solution

// function moveZeroes(nums) {
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (nums[i] === 0) {
//       nums.push(nums[i]);
//       nums.splice(i, 1);
//     }
//   }
//   console.log(nums);
// }

// moveZeroes([0, 0, 1]);

// Optimal Solution
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let nonZeroIndex = 0;

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // If the current element is non-zero
    if (nums[i] !== 0) {
      // Swap non-zero element with the element at nonZeroIndex
      [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
      nonZeroIndex++;
    }
  }

  console.log(nums);
};

moveZeroes([0, 0, 1]);
