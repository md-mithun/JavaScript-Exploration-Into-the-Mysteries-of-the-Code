
// A closure in JavaScript is a function that has access to the variables in the scope in which it was created, even after that scope has closed. 
// This is because closures store a reference to their lexical environment, which is the set of variables that were in scope at the time the function was created.

// Closures can be created in a number of ways, but the most common way is to define an inner function inside of an outer function. 
// The inner function will have access to all of the variables in the outer function's scope, even after the outer function has finished executing.


// ------## Private properties ##------
function createCounter() {
    var count = 0;

    function increment() {
        count++;
    }

    function getCount() {
        return count;
    }

    return {
        increment: increment,
        getCount: getCount,
    };
}

const counter = createCounter();

counter.increment();//1
counter.increment();//2
counter.increment();//3
counter.increment();//4
console.log(counter.getCount()); // logs 4
//   In this example, the count variable is private because it is only accessible to the increment and getCount functions. 
//   Other code cannot access the count variable directly.  

console.log('---------------------------------------');


//##----- Closures in asynchronous JavaScript -----##
var name;
function outerFunction() {
    name = 'John Doe';

    function innerFunction() {
        console.log('Hello, ' + name);
    }

    // Return the inner function
    return innerFunction;
}

// Store the inner function in a variable
var helloFunction = outerFunction();

// Call the inner function at a later time
setTimeout(helloFunction, 1000);
name = 'Mithun';
//  Asynchronous functions are functions that do not block the main thread of execution. This means that they can continue to run even after the main thread has moved on to other tasks.
//  In the code, the setTimeout() function is an asynchronous function. It schedules the innerFunction() closure to be executed after one second. However, the outerFunction() function returns immediately, which means that the innerFunction() closure has name variable.but before one second it reassined by value 'Mithun'.so it's print Hello, Mithun .
//This is because the innerFunction() closure has a reference to the name variable declaration not the variable assigned value


console.log('------------------------------------');


for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); //logs 3 3 3
    }, 1500)
}
console.log('After loop');
console.log(i);//3
/*
This code creates a for loop that iterates from 0 to 2. Inside the for loop, the code calls the setTimeout() function to schedule an anonymous function to be executed after 1500 milliseconds. The anonymous function simply prints the value of the i variable to the console.
After the for loop has finished executing, the code prints the message "After loop" to the console.
The problem with this code is that the var keyword is used to declare the i variable. This means that the i variable is declared in the function scope, not the block scope. This means that the i variable is accessible to all functions within the function scope, including the anonymous function passed to the setTimeout() function.
When the anonymous function is executed, it prints the value of the i variable to the console. However, by the time the anonymous function is executed, the for loop has already finished executing, and the i variable has been incremented to 3.
*/
//##---using let keyword

for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);//logs  0 1 2
    }, 1500)
}
console.log(i);//undefined ,this is because let is blocked scope
//The variable i is declared with the let keyword inside the for loop. This means that there is a new variable i created for each iteration of the for loop.
//When the anonymous function is executed, it has access to the variable i that was declared in the current iteration of the for loop. This is why the anonymous function prints the correct value of the i variable to the console.

// স্পেশাল উপসংহারঃ var যেহেতু function scope তাই ফর লুপের বblocked scope এ এটি global variable এর ন্যায় আচরণ করছে ,যার ফলে এখানে setTimeout() ফাংশন এ closure তৈরি হয় না। তার জন্য লুপ শেষ হওয়ার পর global i এর মান 3 হয়ে যায় এবং কনসোলে তিনবার 3 প্রিন্ট করে।(2 প্রিন্ট না করে 3 প্রিন্ট করার কারন হলো ফর লুপ শেষ হওয়ার পুর্বে কন্ডিশন চেক করার আগেই i কে ইঙ্ক্রিমেন্ট করা হয়)
// কিন্ত let হলো blocked scope তাই এক্ষেত্রে closure তৈরি হয় এবং i এর সকল মান (0,1,2) closures এ জমা রাখে। অতঃপর লুপ শেষ হওয়ার পরেও closures এর সুবিধা নিয়ে 0 1 2 প্রিন্ট করা সম্ভব হয়