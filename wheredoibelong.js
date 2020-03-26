/*

Basic Algorithm Scripting: Where do I Belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

Find where in the array a number should be inserted by order, and return the index where it should go.

1. The first thing to do is sort the array from lower to bigger, just to make the code easier. This is where sort comes in, it needs a callback function so you have to create it.

2. Once the array is sorted, then just check for the first number that is bigger and return the index.

3. If there is no index for that number then you will have to deal with that case too.

Code Explanation
First I sort the array using .sort(callbackFunction) to sort it by lowest to highest, from left to right.
Then I use a for loop to compare the items in the array starting from the smallest one. When an item on the array is greater than the number we are comparing against, then we return the index as an integer.



*/

function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num) return a;
  }

  return arr.length;
}