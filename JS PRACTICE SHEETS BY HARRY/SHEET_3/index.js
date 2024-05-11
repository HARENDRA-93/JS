// //Q1. Write a program to print the marks of a student in an object using for loop.
let marks = {
  harry: 98,
  rohan: 70,
  akas: 7,
};
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "The marks of " +
      Object.keys(marks)[i] +
      " are " +
      marks[Object.keys(marks)[i]]
  );
}
console.log("*****");
//Q2 Write the program in Q1 using for in loop.
for (let a in marks) {
  console.log("marks of " + a + " are " + marks[a]);
}
//Q3  Write a program to print "try again" until the user enters the correct number.

// let x =6;
// let i;
// while(i!=x)
//   {
//         console.log("try again")
//    i= prompt("enter a correct number");

//   }
//console.log("It's a correct number");
//Q4. Write a function to find mean of 5 numbers.

// const mean = (a,b,c,d,e) => {
//   return(a+b+c+d+e)/5
// }
// console.log(mean(1,2,3,4,5))
