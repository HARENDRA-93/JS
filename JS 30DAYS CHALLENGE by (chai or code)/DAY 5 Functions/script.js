// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function fun1(num) {
  if (num % 2 == 0) return "even";
  else return "odd";
}
console.log(`It's:`, fun1(55));

// Task 2: Write a function to calculate the square of a number and return the result.

function fun2(num) {
  return num * num;
}
console.log(`square: `, fun2(5));

// Activity 2: Function Expression

// Task 3:  Write a function expression to find the maximum of two numbers and log the result to the console.
const ab = function fun3(num1, num2) {
  if (num1 > num2) {
    return "num1 is Greater";
  } else {
    return "num2 is Greater";
  }
};

console.log(ab(55, 77));

// Task 4:  Write a function expression to concatenate two strings and log the result to the console.

const abc = function (str1, str2) {
  return str1 + str2;
};
let firstName = "HARENDRA";
let lastName = "SINGH";
console.log(abc(firstName, lastName));

// Activity 3: Arrow Function

// Task 5: Write a arrow function to calculate the sum of two number and return the result.
let fun4 = (num1, num2) => {
  return num1 + num2;
};

console.log(`SUM: `, fun4(5, 6));

// Task 6: Write a arrow function to check if a string contains a specific character and return a boolean value.

let fun5 = (str3, char) => {
  if (str3.split("").includes(char)) {
    return true;
  } else {
    return false;
  }
};

console.log(fun5("HARENDRA", "D"));

// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

let fun6 = (num1, num2 = 7) => {
  return num1 * num2;
};
console.log(`Multiplication: `, fun6(5));

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function fun7(name, age = 27) {
  return `NICE TO MEET YOU ${name} your age is ${age}`;
}
console.log(fun7("VISHAL"));

// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times

// Callback function, passed as a parameter in the higher order function
function callbackFunction() {
  console.log("I am  a callback function");
}

// higher order function
function higherOrderFunction(func, num = 4) {
  for (let i = 0; i < num; i++) {
    console.log("I am higher order function");
    func();
  }
}

higherOrderFunction(callbackFunction);

// Task 10: Write a higher-order function that takes a function and a number, and calls the function that many times
// ??????????????????????????????????????
function values() {
  let a = 99;
}
function result(values) {
  values();
  if (values > 33) {
    console.log("PASS");
  }
}
function HF(values){

}