// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


// my solution 

function grow(x) {
    return x.reduce((a,b) => a * b)
};

const grow = x => x.reduce((a, b) => a * b);