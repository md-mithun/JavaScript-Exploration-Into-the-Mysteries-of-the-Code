class Person {
    // The constructor function takes the name and age of the person as arguments and sets the corresponding properties of the new Person object.
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // This method logs the person's name to the console and says that the person is playing.
    play() {
      console.log(this.name + ' is playing');
    }
  
    // This method logs the person's name to the console and says that the person is sleeping.
    sleep() {
      console.log(this.name + ' is sleeping');
    }
  
    // This method logs the person's name to the console and says that the person is eating.
    eat() {
      console.log(this.name + ' is eating');
    }
  }
  
  // Create a new Person object.
  const obj1 = new Person('Mashrafee', 56);
  
  // Log the name of the Person object.
  console.log(`He is ${obj1.name}`);
  
  // Call the play(), sleep(), and eat() methods of the Person object.
  obj1.play();
  obj1.sleep();
  obj1.eat();
  