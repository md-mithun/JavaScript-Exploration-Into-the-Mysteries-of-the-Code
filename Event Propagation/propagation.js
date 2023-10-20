//True or{capture:true} in event propagation means that the event listener is attached to the capturing phase.
// and the capturing phase is the first phase of event propagation, and it starts at the root of the DOM tree and propagates down to the target element.

document.getElementById('container').addEventListener('click', myFunc)
document.getElementById('form').addEventListener('click', myFunc, { capture: true })
document.getElementById('button').addEventListener('click', myFunc)

function myFunc(e) {
    e.stopPropagation();//now it's select form because form is capture :true;

    console.log(e.currentTarget);//or use 'this'

    // console.log(this);
}

// This will prevent the event from bubbling up the DOM tree and being handled by any other event listeners.
//To stop propagation in JavaScript, you can use the stopPropagation() method on the event object.



