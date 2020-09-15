/*
Intermediate Algorithm Scripting: Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.s
*/

//favourite solution
/*

Hints
Hint 1
Use Math.max() to find the maximum value of two numbers.

Hint 2
Use Math.min() to find the minimum value of two numbers.

Hint 3
Remember to that you must add all the numbers in between so this would require a way to get those numbers.

Code Explanation
The formula for calculating the sum of a continuous range is “(startNum + endNum) * numCount / 2”.
arr[0] and arr[1] can either be startNum or endNum, order doesn’t matter.
We can get the count of numbers in range by “Math.abs(arr[0] - arr[1]) + 1”.
Applying the formula by plugging in the numbers.
Relevant Links
Array.sort() 87
Arithmetic Progression summing formula 308
ES6 arrow function 
*/

const sumAll = arr => {
    // baseline the numbers in the array
    const startNum = arr[0];
    const endNum = arr[1];
  
    // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
    // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
    const numCount = Math.abs(startNum - endNum) + 1;
  
    // Using Arithmetic Progression summing formula
    const sum = ((startNum + endNum) * numCount) / 2;
    return sum;
  };
  
  sumAll([1, 4]);



