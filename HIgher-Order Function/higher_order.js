// A higher-order function in JavaScript is a function that takes one or more functions as arguments, or returns a function as its result. This means that higher-order functions can be used to abstract over actions, not just values. This makes them very powerful and versatile tools.

// Without higher-order function

// Example 1: Create a new array with doubled values
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArray = []; // Declare the new array outside the loop to avoid creating a new one on each iteration.
for (let i = 0; i < array.length; i++) {
  newArray.push(array[i] * 2);
}
console.log(array); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(newArray); // [2, 4, 6, 8, 10, 12, 14, 16, 18]

// Example 2: Create a new array with even numbers
let evenNumbers = []; // Declare the new array outside the loop to avoid creating a new one on each iteration.
for (let x = 0; x < array.length; x++) {
  if (array[x] % 2 === 0) {
    evenNumbers.push(array[x]);
  }
}
console.log(evenNumbers); // [2, 4, 6, 8]

// With higher-order function

// Example 1: Create a new array with doubled values using map()
const newArray2 = array.map(item => item * 2);
console.log(newArray2); // [2, 4, 6, 8, 10, 12, 14, 16, 18]

// Example 2: Create a new array with even numbers using filter()
const evenNumbers2 = array.filter(item => item % 2 === 0);
console.log(evenNumbers2); // [2, 4, 6, 8]
