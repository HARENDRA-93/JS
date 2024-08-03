// Activity 1: Arithmetic Operations

// Task 1: WAP to add two numbers and log the result to the console.

let num1 = 55;
let num2 = 45;
console.log(`SUM:${num1 + num2}`);

// Task 2: WAP to subtract two numbers and log the result to the console.

console.log(`SUBTRACT:${num1 - num2}`);

// Task 3: WAP to Multiply two numbers and log the result to the console.

console.log(`MULTIPLY:${num1 * num2}`);

// Task 4: WAP to Divide two numbers and log the result to the console.

console.log(`DIVIDE:${num1 / num2}`);

// Task 5: WAP to find the remainder when one number is divided by another and log the result to the console.

console.log(`REMAINER:${num1 % num2}`);

// Activity 2: Assignment Operators

// Task 6: Use += operator to add a number to a variable and log the result to the console.

num1 += num2;
console.log(`SUM:${num1}`);

// Task 7: Use -= operator to add a number to a variable and log the result to the console.

num1 -= num2;
console.log(`SUBTRACT:${num1}`);

// Activity 3: Comparison Operators

// Task 8: WAP to compare two numbers using > and < and log the result to the console.

if (num1 > num2) {
  console.log(`num1 is greater than num2`);
} else {
  console.log(`num2 is greater than num1`);
}
// Task 9: WAP to compare two numbers using >= and <= and log the result to the console.
if (num1 >= num2) {
  console.log(`num1 is greater than num2`);
} else {
  console.log(`num2 is greater than num1`);
}
// Task 10: WAP to compare two numbers using == and === and log the result to the console.
let num3 = 20;
let num4 = "20";
if (num3 == num4) {
  console.log(`num3 is equal to num4`);
} else {
  console.log(`num3 is equal not to num4`);
}

if (num3 === num4) {
  console.log(`num3 is equal to num4`);
} else {
  console.log(`num3 is equal not to num4`);
}

// Activity 4: Logical Operators

// Task 11: WAP that uses the && operator to combine two conditions and log the result to the console.

if (num1 == num2 && num3 == num4) {
  console.log(true);
} else {
  console.log(false);
}
// Task 12: WAP that uses the || operator to combine two conditions and log the result to the console.
if (num1 == num2 || num3 == num4) {
  console.log(true);
} else {
  console.log(false);
}

// Task 13: WAP that uses the ! operator to negate a condition and log the result to the console.
if (num1 !== num2) {
  console.log(true);
} else {
  console.log(false);
}

// Activity 5: Ternary Operator

// Task 14: WAP that uses the ternary operator to check if a number is positive or negative and log the result to the console.

num1 > 0
  ? console.log("It is a positive number")
  : console.log("It is a negative number");
