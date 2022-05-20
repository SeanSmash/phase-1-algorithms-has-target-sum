function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length-1; i++){
    for(let x = array.length-1; x>i; x--){
      if(array[i] + array[x] === target){
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  add first and last number, then second to last...
  add second and last number, then second to last...
  compare each sum to target number, return true if the same
*/

/*
  Add written explanation of your solution here
  create a function that takes in a set of numbers and a target
  number, and returns true if any two pairs of numbers equals the 
  target number.
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

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4, 8, 12, 22, 44, -11], 33));
}

module.exports = hasTargetSum;
