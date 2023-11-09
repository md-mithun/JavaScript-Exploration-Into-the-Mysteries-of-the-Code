// Memoization is an optimization technique in computer programming that stores the results of expensive function calls and returns the cached result when the same inputs occur again. This can be useful for improving the performance of functions that are called repeatedly with the same arguments.

// In JavaScript, there are a few different ways to implement memoization. One common approach is to use a cache object to store the results of the function calls. The cache object can be a simple object or a more complex data structure, such as a map.

// Another approach to memoization in JavaScript is to use higher-order functions. Higher-order functions are functions that take other functions as arguments or return other functions as results. They can be used to create memoized functions without explicitly managing a cache object.


// Original `squre` function that calculates the square of a number
function squre(x) {
    // Calculate the square of the input number using multiplication
    // and return the result
    return x * x;
  }
  
  // Memoization function that enhances the performance of another function by caching its results
  function memoizedFunction(func) {
    // Create an empty cache object to store the results of previous function calls
    const caches = {};
  
    // Return a memoized version of the original function
    return function memoizedWrapper(x) {
      // Check if the result of the function call with the provided argument
      // is already stored in the cache
      if (caches[x]) {
        // Retrieve the cached result if it exists, indicating that the result
        // is obtained from the cache rather than recomputed
        console.log('from memory'); // Indicate retrieving from cache
        return caches[x];
      } else {
        // Calculate the result if it is not cached, indicating that the
        // result is computed from scratch
        console.log('from computed'); // Indicate computation
        const result = func(x); // Call the original function to compute the result
        caches[x] = result; // Store the computed result in the cache for future use
        return result; // Return the computed result
      }
    };
  }
  
  // Memoized `calculate` function that utilizes the memoization function to improve performance
  const calculate = memoizedFunction(squre);
  
  // Example usage of the memoized `calculate` function
  console.log(calculate(6)); // 36 (First call with new parameter, so result is computed)
  console.log(calculate(7)); // 49 (First call with new parameter, so result is computed)
  console.log(calculate(7)); // 49 (Second call with previously computed parameter, so result is retrieved from cache)
  console.log(calculate(7)); // 49 (Third call with previously computed parameter, so result is retrieved from cache)
  console.log(calculate(7)); // 49 (Fourth call with previously computed parameter, so result is retrieved from cache)
  