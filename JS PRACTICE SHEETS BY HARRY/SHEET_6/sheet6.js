// Q1. Write a program to print the marks of a student in an object using for loop
// let age = prompt("Enter your age");
// age = Number.parseInt(age);
// without fun
// if(age>=18)
//   alert("you are elligible for driving")
// else
//   alert("You are not elligible for driving")

// with fun
// const candrive = (age) => {
//   return age >= 18 ? true : false
// }
// if (candrive(age))
//   alert("you are elligible for driving")
// else
//   alert("You are not elligible for driving")

// Q.2 Write a program in Q1 using for in loop

// let runagain = 1;
// while (runagain) {
//   let age = prompt("Enter your age");
//   age = Number.parseInt(age);
//   const candrive = (age) => {
//     return age >= 18 ? true : false
//   }
//   if (candrive(age)) {
//     alert("you are elligible for driving")
//   }
//   else {
//     alert("you are not elligible for driving")
//   }
//   runagain = confirm("Do you want to play again? ");
// }

// Q-03. In the previous qustion use console.error to log the error if the age entered is negative 
// let age = prompt("enter your age");
// age = Number.parseInt(age);
// if (age < 0) {
//   console.error("enter your correct age");
// }
// else if (age) {
//   alert("you are elligible for driving")
// }
// else {
//   alert("you are not elligible for driving")
// }
// Q-04. Write a program to change the url to google.com (Redirection) if user enters a number greater than 4
// let x = prompt("enter a number");
// x = Number.parseInt(x);
// if (x > 4) {
//   location.href = "https://google.com"
// }

// Q-05. Change the background of the page to yellow, red or any other color based on user input through prompt.
let color = prompt("Which color do you want to see in background");
document.body.style.background = color;