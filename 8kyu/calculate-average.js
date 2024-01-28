// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


// my solution

function findAverage(array) {
    if (!array.length) return 0;
    return array.reduce(((calc, item) => calc += item), 0) / array.length
}