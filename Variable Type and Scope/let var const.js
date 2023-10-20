// Global scope
var globalVar = 10;
let globalLetVar = 20;
const globalConstVar = 30;

// Function scope
function myFunction() {
  // Local scope
  var localVar = 40;
  let localLetVar = 50;
  const localConstVar = 60;

  console.log(globalVar); // 10
  console.log(globalLetVar); // 20
  console.log(globalConstVar); // 30

  console.log(localVar); // 40
  console.log(localLetVar); // 50
  console.log(localConstVar); // 60
}

myFunction();

// Global scope
console.log(globalVar); // 10
console.log(globalLetVar); // 20
console.log(globalConstVar); // 30

// Function scope
// console.log(localVar); // ReferenceError: localVar is not defined
// console.log(localLetVar); // ReferenceError: localLetVar is not defined
// console.log(localConstVar); // ReferenceError: localConstVar is not defined
