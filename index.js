function hasTargetSum(array, target) {
  // Write your algorithm here
   const seenNumbers = new Set();

   for (const number of array) {
     const complement = target - number;
 
     if (seenNumbers.has(complement)) {
       return true;
     }
 
     seenNumbers.add(number);
   }
 
   
   return false;
 

}

/* 
  Write the Big O time complexity of your function here
  // Time complexity: O(n) - Linear time complexity, as we iterate through the array once.
  // Space complexity: O(n) - Space used for the Set to store seen numbers.
*/

/* 
  Add your pseudocode here
  // 1. Create an empty Set called "seenNumbers" to store numbers we have seen.
  // 2. Iterate through each number in the input array.
  // 3. For each number, calculate its complement by subtracting it from the target.
  // 4. Check if the complement exists in the "seenNumbers" Set.
  // 5. If the complement exists, return true, indicating that we found a pair.
  // 6. If the complement does not exist, add the current number to the "seenNumbers" Set.
  // 7. If we finish iterating through the entire array and do not find a pair, return false.
*/

/*
  Add written explanation of your solution here
  // This algorithm uses a Set to keep track of numbers we have seen so far. It iterates through the input array once, calculating the complement for each number by subtracting it from the target value. If the complement exists in the "seenNumbers" Set, it means we have found a pair of numbers that add up to the target, and we return true. If we reach the end of the array without finding such a pair, we return false. This solution has a time complexity of O(n) and a space complexity of O(n), making it efficient for this problem.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-3, -8, -12, -4, -11, -7], -10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([0, 0, 0, 0], 0));

  console.log("");
}


module.exports = hasTargetSum;
