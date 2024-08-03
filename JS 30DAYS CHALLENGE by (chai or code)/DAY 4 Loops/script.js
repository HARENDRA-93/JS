// Activity 1: For Loop

// Task 1: WAP to print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
  console.log(`${i}`);
}

// Task 2: WAP to print the multiplication table of 5 using a for loop.

for (let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${5 * i}`);
}

// Activity 2: While Loop

// Task 3: WAP to calculate the sum of numbers from 1 to 10 using a for loop.
let i = 1;
let sum = 0;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(`sum of numbers from 1 to 10 is ${sum}`);

// Task 4: WAP to print numbers from 10 to 1 using a while loop.
let j = 10;
while (j > 0) {
  console.log(`${j}`);
  j--;
}

// Activity 3: Do While Loop

// Task 5: WAP to print numbers from 1 to 5 using a do while loop.
let k = 1;
do {
  console.log(`${k}`);
  k++;
} while (k <= 5);

// Task 6: WAP to calculate the factorial of numbers using a while loop.

// Activity 4: Nested Loops
// Task 7:  WAP to print a pattern using nested for loops:

// *
// * *
// * * *
// * * * *
// * * * * *
let pattern = "";
for (let a = 1; a <= 5; a++) {
  for (let b = 1; b <= a; b++) {
    pattern += "* ";
  }
  pattern += "\n";
}
console.log(pattern);

// Activity 5: Loop Control Statements

// Task 8: WAP to print numbers from 1 to 10 but skip the number using the continue statement.
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  } else {
    console.log(`${i}`);
  }
}
// Task 9: WAP to print numbers from 1 to 10 but stop the loopwhen the number is 7 using the break statement.

for (let i = 1; i <= 10; i++) {
    if (i == 7) {
      break;
    } else {
      console.log(`${i}`);
    }
  }