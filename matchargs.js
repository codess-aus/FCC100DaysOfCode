/*
Intermediate Algorithm Scripting: Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

Problem Explanation
Write an algorithm that will take an array for the first argument and return an array with all the objects that matches all the properties and values in the Object passed as second parameter.

Hint 1
You may use for loop or the Array.prototype.filter method.

Hint 2
Try to use the Object.prototype.hasOwnProperty method to know if the property name exists in an object (as its own property).

Hint 3
Check equivalence of Object in collection with Object passed as second parameter to whatIsInAName function.

Code Explanation
We filter through the collection using .filter().
Next, we return a Boolean value for the .filter() method.
Finally, we reduce to Boolean value to be returned for the .every() method.

*/

function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
var srcKeys = Object.keys(source);

  return collection.filter(function(obj) {
    return srcKeys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
