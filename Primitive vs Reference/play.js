const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // Shallow copy

// Primitives:
// Example 1: Number
let num1 = 10;
let num2 = num1; // Copies the value 10 to num2
num2 = 20; // Changes the value of num2, but num1 remains 10
console.log(num1); // Output: 10
console.log(num2); // Output: 20

// Example 2: String
let str1 = 'Hello';
let str2 = str1; // Copies the string "Hello" to str2
str2 += ' World'; // Creates a new string "Hello World"
console.log(str1); // Output: "Hello"
console.log(str2); // Output: "Hello World"

//Reference Types
// Example 1: Object

let person1 = { name: 'Mithun', age: 21 };
let person2 = person1; // Both variables refer to the same object
person2.age = 35; // Modifies the age property of the object
console.log(person1.age); // Output: 35 (person1 is also affected)

// Example 2: Array
let numbers1 = [1, 2, 3];
let numbers2 = numbers1; // Both variables refer to the same array
numbers2.push(4); // Adds an element to the array
console.log(numbers1); // Output: [1, 2, 3, 4] (numbers1 is also affected)

//Pass by reference and pass by value
function changeNumber(num) {
  num = num * 2; // Modifies the copy of num inside the function
}

let myNumber = 5;
changeNumber(myNumber); // Passes a copy of myNumber
console.log(myNumber); // Output: 5 (original value remains unchanged)

function changePersonAge(person) {
  person.age = 35; // Modifies the original object
}

let personX = { name: 'Alice', age: 30 };
changePersonAge(personX); // Passes the reference to person1
console.log(personX.age); // Output: 35 (original object is modified)
