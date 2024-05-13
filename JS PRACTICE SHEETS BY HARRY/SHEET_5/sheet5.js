// let arr = [45,23,21]
// let a = arr.map((value, index, array)=> {
//  // console.log(value,index,array)
//   return value + index 
// }) 
// console.log(a);

//Q1. Create an array of numbers and take input from the user to add numbers to this array.
// let arr=[10,20,25,32,5];
// let a= prompt("enter the value of a");
// a=Number.parseInt(a);
// arr.push(a);

// console.log(arr);
//Q2. Keep adding numbers to the array in Q1 until 0 is added to the array. 
// let arr1=[10,20,25,32,5];
// let a1;
// while(a1!=0)
//   {
//     a1=prompt("enter a number");
//      a1=Number.parseInt(a1);
//     arr1.push(a1);
//     console.log(arr1);
//   }
//Q3. Filter for numbers divisible by 10 from a given array.
// let arr2=[10,20,25,32,5];
// let a2 = arr.filter((a)=>{
//   return a%10==0;
// })
// console.log(a2);
//Q4. Create an array of square of given numbers.
// let arr2=[10,20,25,32,5];
// let a = arr2.map((value)=> {
//   return value**2;
// })
// console.log(a);

//Q5. Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to be calculated)
let arr2 = [1, 2, 3, 4, 5, 6];
let a = arr2.reduce((x1, x2) => {
  return x1 * x2;
})
console.log(a);