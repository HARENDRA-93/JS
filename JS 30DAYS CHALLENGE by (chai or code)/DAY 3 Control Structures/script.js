// Activity 1: If-Else Statements

// Task 1: WAP to check if a number is positive, negative,or zero,and log the result to the console.

let num1 = 0;
if (num1 > 0) {
  console.log(`It's Positive`);
} else if (num1 < 0) {
  console.log(`It's Negative`);
} else {
  console.log(`It's a ZERO`);
}

// Task 2: WAP to check if a person is eligible to  vote (age>=18) ,and log the result to the console.

let age = 17;
if (age >= 18) {
  console.log(`person is eligible to  vote`);
} else {
  console.log(`person is not eligible to  vote`);
}

// Activity 2: Nested If-Else Statements
// Task 3: WAP to find the largest of three numbers using Nested If-Else Statements.

let num2 = 77;
let num3 = 100;

if (num1 >= num2) {
  if (num1 >= num3) {
    console.log(`num1 is the largest number`);
  } else {
    console.log(`num3 is the largest number`);
  }
} else {
  if (num2 >= num3) {
    console.log(`num2 is the largest number`);
  } else {
    console.log(`num3 is the largest number`);
  }
}

// Activity 3: Switch Case

// Task 4: WAP that uses a switch case to determine the day of the week based on a number(1-7)

let num5 = 7;

switch (num5) {
  case 1:
    console.log(`MONDAY`);
    break;
  case 2:
    console.log(`TUESDAY`);
    break;
  case 3:
    console.log(`WEDNESDAY`);
    break;
  case 4:
    console.log(`THURSDAY`);
    break;
  case 5:
    console.log(`FRIDAY`);
    break;
  case 6:
    console.log(`SATDAY`);
    break;
  case 7:
    console.log(`SUNDAY`);
    break;
  default:
    console.log(`It's not a valid number`);
    break;
}

// // Task 5: WAP that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to the console.

// ????????????????????????????????????????????????

// let score = 88;
// switch (score) {
//   case "A":
//     score > 90;
//     console.log(`You grade is A`);
//     break;
//   case "B":
//     score <= 90 && score > 80;
//     console.log(`You grade is B`);
//     break;
//   case "C":
//     score <= 80 && score > 70;
//     console.log(`You grade is C`);
//     break;
//   case "D":
//     score <= 70 && score > 60;
//     console.log(`You grade is C`);
//     break;
//   case "F":
//     score < 33;
//     console.log(`You grade is F`);
//     break;
//   default:
//     console.log(`Enter a valid score`);
// }

// Activity 4: Conditional (Ternary) Operator

// TASK 6: WAP that uses the ternary operator to check if a number is even or odd, and log the result to the console.
num2 % 2 == 0
  ? console.log(`${num2} is an even number`)
  : console.log(`${num2} is an odd number`);

// Activity 5: Combining Conditions

// Task 7: WAP to check if a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400),and log the result to the console.
