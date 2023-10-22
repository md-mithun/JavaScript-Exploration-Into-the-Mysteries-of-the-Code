//simplify Method-1

// Create an object that contains the methods that are shared by all Person objects.
const personMethods = {
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
    // personMethods.
    let person = Object.create(personMethods);
    // Set the name and age properties of the new Person object.
    person.name = name;
    person.age = age;

    // Return the new Person object.
    return person;
}
// Create two new Person objects.
const mithu = Person('Mithun', 19);
const mita = Person('Mita', 19);
// Call the sleep() and eat() methods on the two Person objects.
mithu.sleep();
mita.eat();