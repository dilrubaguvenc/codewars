// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// a can contain numbers or strings. x can be either.

// Return true if the array contains the value, false if not.


// my solution 

const check = (a, x) => a.includes(x) ? true : false;

// or 

const checkArray = (a, x) => a.includes(x)

// or

function check (a, x) {
    return a.includes(x)
};