
// ---------Method1-----------
// Create a constructor function for the Person object.
// This function will take two arguments: name and age.
// It will return a new Person object with the specified name and age.
function Person(name, age) {
    // Create a new empty object.
    let person = {};
    // Set the name and age properties of the new object.
    person.name = name;
    person.age = age;

    // Add a play() method to the new object.
    // This method will log a message to the console saying that the person is playing.
    person.play = function () {
        console.log('Person is playing');
    };
    // Add a sleep() method to the new object.
    // This method will log a message to the console saying that the person is sleeping.
    person.sleep = function () {
        console.log('Person is sleeping');
    };
    // Return the new Person object.
    return person;
}
// Create two new Person objects.
const mithun = Person('Mithun', 19);
const maryaam = Person('Maryaam', 19);
// Call the play() and sleep() method on the mithun and maryaam object.
mithun.play();
maryaam.sleep();
