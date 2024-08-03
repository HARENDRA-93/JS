// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

let arr = [1, 2, 3, 4, 5];
console.log(arr);

// Task 2: Access the first and last elements of the array and log to the console.
console.log(
  `first element of array: ${arr[0]}\nlast elementof array: ${
    arr[arr.length - 1]
  } `
);

// Activity 2: Array Methods (Basic)

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.

arr.push(56);
console.log(" Array after push operation:", arr);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.

arr.pop();
console.log(" Array After pop operation:", arr);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
arr.shift();
console.log(" Array After shift operation:", arr);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
arr.unshift(88);
console.log(" Array After unshift operation:", arr);

// Activity 3: Array Methods (intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let arr2 = arr.map((current) => {
  return current * 2;
});
console.log("MAP", arr2);

// Task 8: Use the filter method to create a new array  with only even numbers and log the new array.

let arr3 = arr.filter((current) => {
  if (current % 2 == 0) return current;
});

console.log("FILTER", arr3);

// Task 9: Use the filter method to calculate the sum of all numbers in the array and log the result.

let arr4 = arr.reduce((sum, current) => sum + current, 0);

console.log(" Reduce:", arr4);

// Activity 4: Array Iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console.

for (let i = 0; i < arr.length; i++) {
  console.log(`arr[${i}]:`, arr[i]);
}

// Task 11: Use a forEach loop to iterate over the array and log each element to the console.
arr.forEach((element) => {
  console.log(element);
});

// Activity 5: Multi-dimensional Arrays
