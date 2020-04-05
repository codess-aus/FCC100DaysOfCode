/*
Basic Algorithm Scripting: Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

Falsy is something which evaluates to FALSE. There are only six falsy values in JavaScript: undefined, null, NaN, 0, “” (empty string), and false of course.

Code Explanation
We create a new empty array.
We use a for cycle to iterate over all elements of the provided array (arr).
We use the if statement to check if the current element is truthy 803 or falsy 428.
If the element is truthy, we push it to the new array (newArray). This result in the new array (newArray) containing only truthy elements.
We return the new array (newArray).

*/


function bouncer(arr) {
  let newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}

bouncer([7, "ate", "", false, 9]);

