// The debounce function creates a closure around the function and delay arguments. This means that the debounced function will have access to the original function and delay even after it is returned.

// Get the button element.
const button = document.getElementById('btn');

// Debounce the function that logs "clicked" to the console.
button.addEventListener('click', debounce(() => {
    console.log('clicked');
}, 500));

/*
 * Debounces a function, meaning it will only be called after a specified delay has elapsed since the last time it was called.
 */
function debounce(fn, delay) {
    // Create a variable to store the timeout ID.
    let timeoutId;

    // Return a function that will be called every time the debounced function is invoked.
    return function () {
        // If there is a pending timeout, clear it. This ensures that the function
        // is only called once after the delay has elapsed.
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // Set a new timeout to call the original function after the delay has elapsed.
        timeoutId = setTimeout(() => {
            fn();
        }, delay);
    };
}
