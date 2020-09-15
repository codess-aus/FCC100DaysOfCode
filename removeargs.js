/*
Intermediate Algorithm Scripting: Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.

Problem Explanation
This problem is a bit tricky because you have to familiarize yourself with Arguments, as you will have to work with two or more but on the script you only see two. Many people hardcode this program for three arguments. You will remove any number from the first argument that is the same as any other other arguments.

Relevant Links
Arguments object 1.1k
Array.filter() 306
Hints
Hint 1
You need to work with arguments as if it was a regular array. The best way is to convert it into one.

Hint 2
You need to filter, this also means you need to create a callback function. You can use various methods like: indexOf(), includes(). If you need another approach, reduce() might also be of use; keep reading those docs!

Hint 3
To convert arguments into an array use this code var args = Array.prototype.slice.call(arguments);

Code Explanation
Declare a variable named args and set it equal to a new Array object from() the arguments passed into the function. On the same or next line, use the slice() method on args starting from the second index, 1. This separates the arguments used for filtering into their own array of args.

Return the filtered array, using includes() in the callback function to check if val is not in args; returning true to keep the value in the original array or false to remove it.

*/


function destroyer(arr) {
    var args = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
      return !args.includes(val);
    });
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);

