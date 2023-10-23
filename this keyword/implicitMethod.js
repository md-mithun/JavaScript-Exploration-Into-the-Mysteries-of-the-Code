// Implicit binding in JavaScript is a rule that determines the value of the this keyword when a function is called. 
// The this keyword refers to the current object, and it is used to access the properties and methods of that object.
// Implicit binding is used when a function is called on an object using the dot notation.

const obj = {
    name: 'Mashrafee',
    play() {
        console.log(this.name + ' is playing');
    },
};

obj.play(); // Logs "Mashrafee is playing"
//In this example, the this keyword inside the play() method refers to the obj object, because the play() method was called on the obj object using the dot notation.  
//ফাংশন কল করার সময় ডট এর আগে যা থাকবে সেটিই this