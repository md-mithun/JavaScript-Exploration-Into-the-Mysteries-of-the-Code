// ##----- Using function prototype properties-----##

// Define the Person prototype object. This object will contain the methods
// that are shared by all Person objects.
Person.prototype = {
    play() {
        console.log(this.name + ' is playing');
    },
    sleep() {
        console.log(this.name + ' is sleeping');
    },
    eat() {
        console.log(this.name + ' is eating');
    },
};

// Define the Person constructor function. This function will create new
// Person objects.
function Person(name, age) {
    // Create a new Person object and inherit the prototype properties from
    // Person.prototype.
    let person = Object.create(Person.prototype);

    // Set the name and age properties of the new Person object.
    person.name = name;
    person.age = age;

    // Return the new Person object
    return person;
}

// Create a new Person object.
const obj1 = Person('Mashrafee', 56);
// Log the name of the Person object.
console.log(`He is ${obj1.name}`);
// Call the play(), sleep(), and eat() methods of the Person object.
obj1.play();
obj1.sleep();
obj1.eat();

