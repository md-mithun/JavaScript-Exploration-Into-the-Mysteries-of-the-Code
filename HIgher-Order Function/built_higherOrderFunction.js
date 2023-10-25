// A function that takes an array and a function as arguments and returns a new array containing the results of applying the function to each element of the original array.
function myMap(array, func) {
    // Create a new empty array to store the results.
    const newArray = [];

    // Iterate over the original array and apply the function to each element.
    for (let i = 0; i < array.length; i++) {
        newArray.push(func(array[i]));
    }

    // Return the new array containing the results.
    return newArray;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6];
const squares = myMap(numbers, ((num) => {
    return num * num;
}));

console.log(squares); // [1, 4, 9, 16, 25, 36]




console.log('-------------------------------------------');




// A function that takes an array and a function as arguments and returns a new array containing only the elements of the original array for which the function returns true.
function myFilter(array, func) {
    // Create a new empty array to store the results.
    const newArray = [];

    // Iterate over the original array and apply the function to each element.
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            newArray.push(array[i]);
        }
    }

    // Return the new array containing the results.
    return newArray;
}

// Example usage:
const numbers1 = [1, 2, 3, 4, 5, 6];
const evenNumbers = myFilter(numbers1, ((num) => {
    return num % 2 === 0;
}));

console.log(evenNumbers); // [2, 4, 6]
