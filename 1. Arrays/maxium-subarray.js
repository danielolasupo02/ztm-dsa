function maxSubArray(nums) {
  let maxSum = Number.NEGATIVE_INFINITY;
  let currentSum = 0;
  let currentSubArray = [];
  let maxSubArray = [];

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    currentSubArray.push(nums[i]);

    if (currentSum < 0) {
      currentSum = 0;
      currentSubArray = [];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      maxSubArray = [...currentSubArray]; // Copy the current subarray to maxSubArray
    }
  }

  console.log("The maximum subarray is:", maxSubArray);
  console.log("The maximum subarray sum is:", maxSum);
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
