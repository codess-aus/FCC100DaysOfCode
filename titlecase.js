/*
Basic Algorithm Scripting: Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/





function titleCase(str) {
  //Lowercase the whole string using str.toLowerCase()
  //Replace every word’ first character to uppercase using .replace
  //Search for character at the beginning of each word i.e. matching any character following a space or matching the first character of the whole string, by using the following pattern
  //Regex explanation:
      // Find all non-whitespace characters (\S)
      // At the beginning of string (^)
      // Or after any whitespace character (\s)
      // The g modifier searches for other such word pattern in the whole string and replaces them
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}
titleCase("I'm a little tea pot");


/*
Hints
Hint 1
You should start by splitting the string into an array of words.
Split the sentence.
Hint 2
You should make the word lowercase before making the first letter uppercase.
Use replace method on each word to capitalize the first letter of each word.
Hint 3
You will need to create a new string with pieces of the previous one and at the end merge everything into a single string again.
In replace method, give first argument as the position of the first letter using charAt. For second argument write a function to return the capitalized letter as the replacement.

Soln 1:

String.prototype.replaceAt = function(index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};

function titleCase(str) {
  var newTitle = str.split(" ");
  var updatedTitle = [];
  for (var st in newTitle) {
    updatedTitle[st] = newTitle[st]
      .toLowerCase()
      .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
  }
  return updatedTitle.join(" ");
}

Code Explanation
We are modifying the replaceAt function using prototype to facilitate the use of the program.

Split the string by white spaces, and create a variable to track the updated title. Then we use a loop to turn turn the first character of the word to uppercase and the rest to lowercase. by creating concatenated string composed of the whole word in lowercase with the first character replaced by its uppercase.

Soln 2:

function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot");

We are making entire string lowercase and then converting it into array. Then we are using map function to replace the lowercase character with uppercase. Finally, we are returning the string using join method.

*/

