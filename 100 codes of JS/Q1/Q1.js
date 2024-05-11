//*---------------------------
//* Longest Word in a String
//*---------------------------

// Q: Write a Function findLongestWord that takes a string as input and returns the longest word in the string. if there are multiple longest words , return the first one encountered.

//*Constraints:
// The input string may contain alphabetic characters, digits, spaces, and punctuations.
// The input string is non-empty.
// The input string may contain multiple words seprated by spaces.

//* Note:
// If the input string is empty or contains only whitespaces, the function should return an false.
// The function should ignore leading and trailing whitespace when determining the longest word.

// ---------------------- Method 1-----------------------
// const findLongestWord = (str) => {
//   if (str.trim().length === 0) {
//     //if string is empty return false
//     return false;
//   }

//   words = str.split(" "); // to convert the string in array
//   words = words.sort((a, b) => b.length - a.length); // to sort the string
//   console.log(words);
//   return words[0];
// };

// console.log(findLongestWord("Watch technical javascript course on youtube"));

// ------------------------------Method 2--------------------------

const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  let len = 0;
  let result = "";
  let arr = str.split(" ");

  arr.map((root) => {
    if (root.length > len) {
      result = root;
      len = root.length;
    }
  });
  return result;
};

console.log(findLongestWord("My NAME is Harendra"));
