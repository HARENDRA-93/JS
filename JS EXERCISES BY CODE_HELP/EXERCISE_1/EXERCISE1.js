// // Q.1) Write a function that takes two numbers as arguments and returns their sum.
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(5, 5));
// document.write(sum(5, 6));

// // Q.2) Write a function that takes a string as an argument and returns its length.
// function a(name) {
//   return name.length;
// }
// console.log(a("HARENDRA"));
// document.write(a("HARENDRA"));

// // Q3.) Write a program that takes two numbers and displays their sum, difference, product, and quotient.

// // Declare and initialize two variables with number values
// const num1 = Number(21);
// const num2 = Number(43);

// // Declare and initialize four more variables with arithmetic operations performed on num1 and num2
// const sum = num1 + num2; // Add num1 and num2
// const diff = num1 - num2; // Subtract num2 from num1
// const product = num1 * num2; // Multiply num1 and num2
// const quotient = num1 / num2; // Divide num1 by num2

// // Output the values of the four variables to the console, with descriptive labels
// console.log(`Sum: ${sum}`); // Sum: 64
// console.log(`Difference: ${diff}`); // Difference: -22
// console.log(`Product: ${product}`); // Product: 903
// console.log(`Quotient: ${quotient}`); // Quotient: 0.4883720930232558

// Q4.) Write a function that takes two numbers as arguments and returns the larger number.
// function largest(a, b) {
//   if (a > b) return a;
//   else return b;
// }

// console.log(largest(77, 66));

// // Q5.) Write a program that displays a string in reverse order.

// // Define the string to reverse
// const originalString = "HARENDRA";

// // Define a function that takes a string parameter
// function reverseString(str) {
//   // Convert the string to an array, reverse the array, then join it back into a string
//   const reversedString = str.split("").reverse().join("");
//   // Return the reversed string
//   return reversedString;
// }

// // Call the function with the original string and output the result to the console
// console.log(reverseString(originalString));

// // Q.6) Write a program that takes a number and checks whether it is positive, negative, or zero.

// let num = 88;

// function check(num) {
//   if (num > 0) console.log(`It's Positive Number`);
//   else if (num < 0) console.log(`It's Negative Number`);
//   else console.log(`It's a Zero Number`);
// }

// check(num);

// // Q.7) Write a program that takes a number and prints the multiplication table for that number.

// function multi(num) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${num}*${i}= ${num * i}`);
//   }
// }

// multi(2);
// multi(4)

// // Q.8) Write a program that takes a number and calculates the sum of all numbers from 1 to that number.

// function calculate(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum = sum + i;
//   }
//   console.log(sum);
// }
// calculate(6);

// // Q.9) Write a program that takes a string and prints out the number of vowels in the string.

// // function to count the number of vowels in a string
// function countVowels(str) {
//   // define an array of vowels
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;

//   // loop through each character in the string
//   for (let i = 0; i < str.length; i++) {
//     // check if the character is a vowel
//     if (vowels.includes(str[i].toLowerCase())) {
//       count++;
//     }
//   }

//   // return the number of vowels
//   return count;
// }

// // test cases
// console.log(countVowels("CodeHelp")); // output: 3

// Q.10 Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.
// For example, given the arrays [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7], the function should return [3, 4, 5].
// Hint: You may need to use nested loops and conditional statements to solve this problem.

function findCommonElements(arr1, arr2) {
  // Create an empty array to hold the common elements
  let commonElements = [];

  // Loop through each element in arr1
  for (let i = 0; i < arr1.length; i++) {
    // Check if the current element is in arr2
    if (arr2.includes(arr1[i])) {
      // If the element is in arr2 and not already in commonElements array, add it
      if (!commonElements.includes(arr1[i])) {
        commonElements.push(arr1[i]);
      }
    }
  }

  // Sort the commonElements array in ascending order
  commonElements.sort((a, b) => a - b);

  // Return the commonElements array
  return commonElements;
}

// Example usage
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const commonElements = findCommonElements(arr1, arr2);
console.log(commonElements); // Outputs: [3, 4, 5]
