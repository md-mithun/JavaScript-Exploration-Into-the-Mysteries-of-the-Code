//JavaScript scope is the set of variables that are accessible to a particular part of your code
// Global scope: Variables declared in the global scope are accessible from anywhere in our code.
// Local scope: Variables declared inside a function or block of code are only accessible within that function or block of code.

// Global scope
var globalVar = 10;

function myFunction() {
    // Local scope
    var localVar = 20;
    console.log(globalVar); // 10
    console.log(localVar); // 20
}
myFunction();

// Global scope
console.log(globalVar); // 10
// Local scope
console.log(localVar); // ReferenceError: localVar is not defined
