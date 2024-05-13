// Q1. What will the following print in javascript?
console.log("har\"".length);

//Q2. Explore the includes, startsWith & endsWith functions of a string.
let a = "Hello how are you";

console.log(a.includes("hello"));
console.log(a.includes("Hello"));
console.log(a.startsWith("hello"));
console.log(a.startsWith("Hello"));
console.log(a.endsWith("Hello"));
console.log(a.endsWith("you"));

//Q3 Write  a program to convert a given string to lowercase.
let b = a.toLowerCase();
console.log(b);

//Q4. Extract the amount out of this string "Please give Rs 1000" 
let c = "Please give Rs 1000";
let amount = c.slice("Please give Rs ".length);
console.log(amount);

// Q5. Try to change 4th character of a given string "were you able to do it" ?
let d = "were you able to do it";
console.log(d.replace("to", "to be"));
