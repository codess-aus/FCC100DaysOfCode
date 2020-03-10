/*
Basic Algorithm Scripting: Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.

Go through each word and figure out which one is the longest and return not the word, but how many characters it has.

*/

findLongestWordLength("The quick brown fox jumped over the lazy dog");


function findLongestWordLength(str) {
// Split the string into an array of words.
  var words = str.split(' ');
  // Keep track globally of the greatest current length.
  var maxLength = 0;

  // Get the length of elements on the array with Array[index].length.
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}

