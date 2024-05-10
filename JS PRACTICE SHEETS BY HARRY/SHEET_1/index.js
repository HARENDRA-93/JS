
//Chapter 1
//Q1. Create a variable of string and try to add a number to it.
let a = "harendra";
let b = 88;
console.log(a + b)
// document.write(a + b);
console.log("****************");
//Q2. use typeof operator to find data type
console.log(typeof (a));
console.log(typeof (b));
console.log(typeof (a + b));
console.log(typeof (b + a));
console.log("****************");

//Q3. Create a const obj. in js. Can you change it to hold a number later?

const a1 = {
  name: "Harendra",
  section: 1,
  isPrincipal: false
}
console.log(a1);
//a1 = 45
a1['name'] = "shubham";
console.log(a1);
console.log("****************");

//Q4. Try to add a new key to the const object in problem 3. Were you able to do it?
a1['friend'] = "shubham"; //adding new keys 
a1['ADDRESS'] = "AGRA";
console.log(a1)
console.log("****************");

//Q5. Write a js program to create a word-meaning dictionary of 5 words.
const dict = {
  gingerly: "with great care or caution; warily.",
  phoenix: " a person or thing that has become renewed or restored after suffering calamity.",
  gamboge: "yellow or yellow-orange.",
  yakka: "work, especially hard work.",
  appreciate: "recognize the full worth of.",
  Harendra: "हरेंद्र"
}
console.log(dict['yakka'])
//or
console.log(dict.yakka)
console.log(dict.Harendra)

