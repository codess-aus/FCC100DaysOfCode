/*

Basic Algorithm Scripting: Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Problem Explanation
Our goal for this Algorithm is to split arr (first argument) into smaller chunks of arrays with the length provided by size (second argument). There are 4 green checks (objectives) our code needs to pass in order to complete this Algorithm:

(['a', 'b', 'c', 'd'], 2) is expected to be [['a', 'b'], ['c', 'd']]
([0, 1, 2, 3, 4, 5], 3) is expected to be [[0, 1, 2], [3, 4, 5]]
([0, 1, 2, 3, 4, 5], 2) is expected to be [[0, 1], [2, 3], [4, 5]]
([0, 1, 2, 3, 4, 5], 4) is expected to be [[0, 1, 2, 3], [4, 5]]

Code Explanation
Firstly, we create two empty arrays called temp and result, which we will eventually return.
Our for loop loops until a is equal to or more than the length of the array in our test.
Inside our loop, we push to temp using temp.push(arr[a]); if the remainder of a / size is not equal to size - 1.
Otherwise, we push to temp, push temp to the result variable and reset temp to an empty array.
Next, if temp isn’t an empty array, we push it to result.
Finally, we return the value of result.

*/

function chunkArrayInGroups(arr, size) {
  var temp = [];
  var result = [];

  for (var a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}
