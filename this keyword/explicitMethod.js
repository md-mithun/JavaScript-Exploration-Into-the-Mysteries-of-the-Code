// ##-----Explicit binding allows to specify what object the this keyword should refer to when the function is called-----##
//1. Using the call() method: The call() method takes two arguments: the object to bind the function to and an arbitrary number of arguments to pass to the function.
//2. Using the apply() method: The apply() method is similar to the call() method, but it takes an array of arguments to pass to the function instead of individual arguments.
//3. Using the bind() method: The bind() method returns a new function that is bound to the specified object.
//এক্ষেত্রে জাভাস্ক্রিপ্ট পরোক্ষ ভাবে বলে দিতে হই কোন অবজেক্ট কে this হিসেবে ধরবে।

// Define a function that prints the player's name, the game they are playing, and the amount of time they have been playing.
const printName = function (game, time) {
    // Use the `this` keyword to access the player's name property.
    console.log(`${this.name} has been playing ${game} for ${time}`);
};
// Create a player object.
const players = {
    name: 'Mashrafee',
    age: 30,
};

// 1. Use the `call()` method to call the `printName()` function on the `players` object.
// Declare two variables to store the game and time.
let game = 'cricket';
let time = '15 years';
printName.call(players, game, time); // Outputs: "Mashrafee has been playing cricket for 15 years"


//2. Use the `apply()` method to call the `printName()` function on the `players` object, passing in the `details` array as the arguments.
// Create an array to store the game and time.
const details = [game, time];
printName.apply(players, details); // Outputs: "Mashrafee has been playing cricket for 15 years"


// 3.Using the bind() method: The bind() method returns a new function that is bound to the specified object.
const newFunc = printName.bind(players, game, time);
//call the return function
newFunc();