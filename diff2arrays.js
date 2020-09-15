/*
Intermediate Algorithm Scripting: Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.

Check two arrays and return a new array that contains only the items that are not in either of the original arrays.

Relevant Links
for Loop (Devdocs) 854
Array.prototype.includes (Devdocs) 3.4k
Array.prototype.filter (Devdocs) 1.4k
Array.prototype.concat (Devdocs) 789
Hints
Hint 1
Merge the list to make it easy to compare functions.

Hint 2
Use filter to get the new array, you will need to create a callback function.

Hint 3
The best way to go about the callback function is to check if the number from the new merged array is not in both original arrays and return it.

*/

//(Declarative Solution):

function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  
  /* Code Explanation
    
  Relevant Links
  Array.prototype.concat (Devdocs) 789
  Array.prototype.filter (Devdocs) 1.4k
  Array.prototype.includes (Devdocs)
  */